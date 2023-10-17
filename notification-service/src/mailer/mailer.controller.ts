import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller('mailer')
export class MailerController {
	@EventPattern('order_created')
	async handleOrderCreated(data: Record<string, unknown>) {
		console.log('Order created', data);
		// Send mail to users
	}
}
