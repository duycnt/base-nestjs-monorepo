import { Timezone } from 'libs/core';

export abstract class IAppConfigService {
  appName!: string;
  env!: string;
  host!: string;
  port!: number | string;
  tz!: Timezone;
  logLevel!: string;

  jwtToken?: string;
  jwtTokenExpiresIn?: number | string;

  ttl?: number | string;
  limit?: number | string;
}
