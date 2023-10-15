import { Injectable } from '@nestjs/common';
import { OrderDto } from './requests';

@Injectable()
export class OrdersService {
	orders: OrderDto[] = [];

	async createOrder(order: OrderDto) {
		this.orders.push(order);
		return order;
	}
}
