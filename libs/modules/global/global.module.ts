import { Global, Module } from '@nestjs/common';
import { AppConfigModule } from './config';
import { LoggerModule } from './logger';

@Global()
@Module({
  imports: [AppConfigModule, LoggerModule],
  exports: [AppConfigModule, LoggerModule],
})
export class GlobalModule {}
