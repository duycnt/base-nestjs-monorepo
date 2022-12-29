import { Module } from '@nestjs/common';
import { AppConfigModule, IAppConfigService } from 'libs/modules/global/config';
import { JwtService } from './jwt.service';
import { IJwtService } from './jwt.type';

@Module({
  imports: [AppConfigModule],
  providers: [
    {
      provide: IJwtService,
      useFactory: (config: IAppConfigService) => new JwtService(config),
      inject: [IAppConfigService],
    },
  ],
  exports: [IJwtService],
})
export class JwtModule {}
