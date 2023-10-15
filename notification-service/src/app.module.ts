import { MailModule } from './mail/mail.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [MailModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
