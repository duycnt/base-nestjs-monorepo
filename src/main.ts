import { bold } from 'colorette';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { name, description, version } from '../package.json';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppExceptionFilter, HttpLoggerInterceptor } from 'libs/utils';
import { ILoggerService, LoggerService } from 'libs/modules/global/logger';
import { IAppConfigService } from 'libs/modules/global/config';
import helmet from 'helmet';

ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true, cors: true });

  const { env, host, port, tz } = app.get(IAppConfigService);
  const loggerService: LoggerService = app.get(ILoggerService);
  loggerService.setApplication(name);

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.PRECONDITION_FAILED,
    }),
  );
  app.enableCors();
  app.useGlobalFilters(new AppExceptionFilter(loggerService));
  app.useGlobalInterceptors(new HttpLoggerInterceptor(loggerService));
  app.use(helmet());
  app.setGlobalPrefix('/api');

  //#region setup swagger
  const config = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .addTag('APIs Documentation')
    .build();

  const SWAGGER_API_ROOT = 'api/docs';
  const openApiURL = `${host}/${SWAGGER_API_ROOT}`;

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_API_ROOT, app, document);
  loggerService.log(`🔵 swagger listening at ${bold(openApiURL)}`);
  //#endregion

  /** start server */
  await app.listen(port, () => {
    loggerService.info({
      message: `🟢 Server ${env} is listening on port ${port} with timezone ${tz}`,
    });
  });
}
bootstrap();
