import { ApiException } from '../../../utils/exception';
import { HttpException } from '@nestjs/common';
import { HttpLogger } from 'pino-http';
import { LevelWithSilent } from 'pino';

export type MessageType = {
  /**
   * message to be logged
   */
  message: string;
  /**
   * method or class that accour message
   */
  context?: string;
  /**
   * addtional object to log
   */
  obj?: object;
};

export type ErrorType = HttpException | ApiException;

export abstract class ILoggerService<T extends HttpLogger = HttpLogger> {
  abstract pino: T;
  abstract connect<TLevel = LevelWithSilent>(logLevel?: TLevel): void;
  abstract setApplication(app: string): void;
  abstract trace({ message, context, obj }: MessageType): void;
  abstract info({ message, context, obj }: MessageType): void;
  abstract warn({ message, context, obj }: MessageType): void;
  abstract error(error: ErrorType, message?: string, context?: string): void;
  abstract fatal(error: ErrorType, message?: string, context?: string): void;
}
