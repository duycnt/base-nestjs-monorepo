import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Timezone } from '../../../core';
import { IAppConfigService } from './config.adapter';

@Injectable()
export class AppConfig extends ConfigService implements IAppConfigService {
  constructor() {
    super();
  }

  appName = this.get('APP_NAME') || 'app';
  env = this.get('ENV');
  host = this.get('HOST');
  port = this.get('PORT');
  tz = this.get('TZ') || Timezone['Asia/Ho_Chi_Minh'];
  logLevel = this.get('LOG_LEVEL') || 'debug';
  jwtToken = this.get('LOG_LEVEL');

  ttl = this.get('REQUEST_TTL');
  limit = this.get('REQUEST_LIMIT');
}
