import { bold } from 'colorette';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { RequestMethod } from '@nestjs/common';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { name, description, version } from '../package.json';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { IEnvService } from 'libs/modules/global/env';
import { AppExceptionFilter, HttpLoggerInterceptor } from 'libs/utils';
import { ILoggerService, LoggerService } from 'libs/modules/global/logger';

ConfigModule.forRoot({
  envFilePath: '.env',
  isGlobal: true,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: HttpStatus.PRECONDITION_FAILED,
    }),
  );

  const { env, port, tz } = app.get(IEnvService);
  const loggerService: LoggerService = app.get(ILoggerService);
  loggerService.setApplication(name);

  app.useGlobalFilters(new AppExceptionFilter(loggerService));
  app.useGlobalInterceptors(new HttpLoggerInterceptor(loggerService));
  app.setGlobalPrefix('api', {
    exclude: [{ path: 'health', method: RequestMethod.GET }],
  });

  // setup swagger
  const config = new DocumentBuilder()
    .setTitle(name)
    .setDescription(description)
    .setVersion(version)
    .addTag('Swagger Documentation')
    .build();

  const url = 'http://localhost:3000';
  const SWAGGER_API_ROOT = 'api/docs';

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_API_ROOT, app, document);

  await app.listen(port, () => {
    loggerService.info({
      message: `🟢 Server ${env} is listening on port ${port} with timezone ${tz}`,
    });
  });

  const openApiURL = `${url}/${SWAGGER_API_ROOT}`;
  loggerService.log(`🔵 swagger listening at ${bold(openApiURL)}`);
}
bootstrap();
