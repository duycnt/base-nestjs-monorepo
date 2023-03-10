import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  healthCheck(): string {
    return this.appService.healthCheck();
  }
}
