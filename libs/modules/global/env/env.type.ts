import { Timezone } from 'libs/core';

export abstract class IEnvService {
  appName!: string;
  env!: string;
  port!: number | string;
  tz!: Timezone;
  logLevel!: string;

  jwtToken?: string;
  jwtTokenExpiresIn?: number | string;
}
