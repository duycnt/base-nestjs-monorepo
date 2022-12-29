import { HttpStatus, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { IAppConfigService } from 'libs/modules/global/config';
import { ApiException } from '../../../utils/exception';
import { IJwtService, Token } from './jwt.type';

@Injectable()
export class JwtService implements IJwtService {
  constructor(private readonly config: IAppConfigService) {}

  sign(model: object, options?: jwt.SignOptions): Token {
    const token = jwt.sign(
      model,
      this.config.jwtToken,
      options || {
        expiresIn: this.config.jwtTokenExpiresIn,
      },
    );

    return { token };
  }

  async verify(token: string): Promise<jwt.JwtPayload | string> {
    return new Promise((res, rej) => {
      jwt.verify(token, this.config.jwtToken, (error, decoded) => {
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
