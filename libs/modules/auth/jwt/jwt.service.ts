import { HttpStatus, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ApiException } from '../../../utils/exception';
import { IEnvService } from '../../global/env';
import { IJwtService, Token } from './jwt.type';

@Injectable()
export class JwtService implements IJwtService {
  constructor(private readonly envService: IEnvService) {}

  sign(model: object, options?: jwt.SignOptions): Token {
    const token = jwt.sign(
      model,
      this.envService.jwtToken,
      options || {
        expiresIn: this.envService.jwtTokenExpiresIn,
      },
    );

    return { token };
  }

  async verify(token: string): Promise<jwt.JwtPayload | string> {
    return new Promise((res, rej) => {
      jwt.verify(token, this.envService.jwtToken, (error, decoded) => {
        if (error)
          rej(new ApiException(error.message, HttpStatus.UNAUTHORIZED, `${JwtService.name}/${this.verify.name}`));

        res(decoded);
      });
    });
  }

  decode(token: string): jwt.JwtPayload | string {
    return jwt.decode(token);
  }
}
