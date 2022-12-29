import { Module } from '@nestjs/common';
import { RateLimitModule } from 'libs/modules/rate-limit/ratelimit.module';
import { GlobalModule } from '../libs/modules';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [GlobalModule, RateLimitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
