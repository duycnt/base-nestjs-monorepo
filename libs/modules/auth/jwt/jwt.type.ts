import * as jwt from 'jsonwebtoken';

export type Token = {
  token: string;
};

export abstract class IJwtService {
  abstract sign<T = jwt.SignOptions>(model: object, options?: T): Token;
  abstract verify<T = jwt.JwtPayload>(token: string): Promise<T | string | unknown>;
  abstract decode<T = jwt.JwtPayload>(token: string): T | string | unknown;
}
