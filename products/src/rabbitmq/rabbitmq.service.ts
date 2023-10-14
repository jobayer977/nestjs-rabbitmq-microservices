import {
	ClientProxy,
	ClientProxyFactory,
	Transport,
} from '@nestjs/microservices';

import { Injectable } from '@nestjs/common';
import { rabbitmqConfig } from './rabbitmq.config';

@Injectable()
export class RabbitmqService {
	private client: ClientProxy;

	constructor() {
		this.client = ClientProxyFactory.create({
			transport: Transport.RMQ,
			options: {
				urls: [`amqp://${rabbitmqConfig.hostname}:${rabbitmqConfig.port}`],
				queue: 'your_queue_name',
				queueOptions: {
					durable: false, // Set to true for durability
				},
			},
		});
	}

	async sendMessage(data: any) {
		return this.client.emit('your_event_name', data);
	}

	async receiveMessage(callback: (data: any) => void) {}
}
