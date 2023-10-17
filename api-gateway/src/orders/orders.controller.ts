import { Body, Controller, Inject, Post } from '@nestjs/common';
import { OrderDto } from './requests';
import { OrdersService } from './orders.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
	constructor(
		private readonly ordersService: OrdersService,
		@Inject('NOTIFICATION_SERVICE') private readonly client: ClientProxy
	) {}

	@Post()
	async create(@Body() payload: OrderDto) {
		this.client.emit('order_created', payload);
		return this.ordersService.create(payload);
	}
}
