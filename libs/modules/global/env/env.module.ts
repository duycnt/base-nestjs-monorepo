import { EnvService } from './env.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IEnvService } from './env.type';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
  ],
  providers: [
    {
      provide: IEnvService,
      useClass: EnvService,
    },
  ],
  exports: [IEnvService],
})
export class EnvModule {}
