import { Module } from '@nestjs/common';
import { AuthModule, GlobalModule } from '../libs/modules';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AuthModule, GlobalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
