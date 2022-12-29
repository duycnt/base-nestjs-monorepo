import { Global, Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { ILoggerService } from './logger.adapter';
import pino from 'pino';
import { IAppConfigService } from '../config';

@Global()
@Module({
  providers: [
    {
      provide: ILoggerService,
      useFactory: ({ logLevel }: IAppConfigService) => {
        const logger = new LoggerService((logLevel as pino.Level) || 'error');
        logger.connect(logLevel);
        return logger;
      },
      inject: [IAppConfigService],
    },
  ],
  exports: [ILoggerService],
})
export class LoggerModule {}
