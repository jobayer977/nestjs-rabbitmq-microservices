import { Injectable } from '@nestjs/common';
import { SendMailRequest } from './requests';

@Injectable()
export class MailService {
  async sendMail(payload: SendMailRequest) {
    const msg = `Sending mail to ${payload.to} with subject ${payload.subject} and text ${payload.text}`;
    console.log(msg);
    return msg;
  }
}
