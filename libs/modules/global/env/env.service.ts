import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Timezone } from '../../../core';
import { IEnvService } from './env.type';

@Injectable()
export class EnvService extends ConfigService implements IEnvService {
  constructor() {
    super();
  }

  appName = this.get('APP_NAME') || 'app';
  env = this.get('ENV');
  port = this.get('PORT');
  tz = this.get('TZ') || Timezone['Asia/Ho_Chi_Minh'];
  logLevel = this.get('LOG_LEVEL') || 'debug';
  jwtToken = this.get('LOG_LEVEL');
}
