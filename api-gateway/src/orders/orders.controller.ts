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
	create(@Body() payload: OrderDto) {
		this.client.emit('ORDER_CREATED', payload);
		return this.ordersService.createOrder(payload);
	}
}
