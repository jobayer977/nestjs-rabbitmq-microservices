import { Body, Controller, Post } from '@nestjs/common';

import { MailService } from './mail.service';
import { SendMailRequest } from './requests';
import { EventPattern } from '@nestjs/microservices';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async sendMail(@Body() payload: SendMailRequest) {
    return this.mailService.sendMail(payload);
  }

  @EventPattern('ORDER_CREATED')
  async handleOrderCreated(data: Record<string, unknown>) {
    console.log('Order created', data);
  }
}
