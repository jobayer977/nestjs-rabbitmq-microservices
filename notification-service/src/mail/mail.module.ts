import { MailService } from './mail.service';
import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';

@Module({
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}
