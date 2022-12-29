import { Controller, UseGuards } from '@nestjs/common';
import { ThrottlerBehindProxyGuard } from './ratelimit.service';

@Controller()
@UseGuards(ThrottlerBehindProxyGuard)
export class RateLimitController {}
