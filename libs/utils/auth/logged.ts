import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { ILoggerService } from '../../modules/global/logger';
import { IJwtService } from '../../modules/auth/jwt';

@Injectable()
export class IsLoggedMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: IJwtService, private readonly loggerService: ILoggerService) {}
  async use(request: Request, response: Response, next: NextFunction): Promise<void> {
    const tokenHeader = request.headers.authorization;

    if (!tokenHeader) {
      if (!request.headers?.traceid) {
        request.headers.traceid = uuidv4();
      }
      response.status(412);
      this.loggerService.pino(request, response);
      throw new UnauthorizedException('no token provided');
    }

    const token = tokenHeader.split(' ')[1];

    const userDecoded: { userId?: string } = await this.jwtService.verify(token).catch((error) => {
      const tokenDecoded: { userId?: string } = this.jwtService.decode(token);
      error.user = tokenDecoded?.userId;

      if (!request.headers?.traceid) {
        request.headers.traceid = uuidv4();
      }

      this.loggerService.pino(request, response);
      next(error);
    });

    request.headers.user = userDecoded?.userId;

    next();
  }
}
