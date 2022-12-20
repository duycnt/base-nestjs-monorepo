import { Module } from '@nestjs/common';
import { IEnvService } from '../env';
import { LoggerService } from './logger.service';
import { ILoggerService } from './logger.type';
import pino from 'pino';

@Module({
  providers: [
    {
      provide: ILoggerService,
      useFactory: ({ logLevel }: IEnvService) => {
        const logger = new LoggerService((logLevel as pino.Level) || 'error');
        logger.connect(logLevel);
        return logger;
      },
      inject: [IEnvService],
    },
  ],
  exports: [ILoggerService],
})
export class LoggerModule {}
