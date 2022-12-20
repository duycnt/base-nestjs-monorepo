import { Global, Module } from '@nestjs/common';
import { EnvModule } from './env';
import { LoggerModule } from './logger';

@Global()
@Module({
  imports: [EnvModule, LoggerModule],
  exports: [EnvModule, LoggerModule],
})
export class GlobalModule {}
