import { Module } from '@nestjs/common';
import { EnvModule, IEnvService } from '../../global/env';
import { JwtService } from './jwt.service';
import { IJwtService } from './jwt.type';

@Module({
  imports: [EnvModule],
  providers: [
    {
      provide: IJwtService,
      useFactory: (env: IEnvService) => new JwtService(env),
      inject: [IEnvService],
    },
  ],
  exports: [IJwtService],
})
export class JwtModule {}
