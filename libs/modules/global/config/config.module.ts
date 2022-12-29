import { AppConfig } from './config.service';
import { Global, Module } from '@nestjs/common';
import { IAppConfigService } from './config.adapter';
import { ConfigModule } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
  ],
  providers: [
    {
      provide: IAppConfigService,
      useClass: AppConfig,
    },
  ],
  exports: [IAppConfigService],
})
export class AppConfigModule {}
