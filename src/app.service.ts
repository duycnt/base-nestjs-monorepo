import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck(): any {
    return { alive: true };
  }
}
