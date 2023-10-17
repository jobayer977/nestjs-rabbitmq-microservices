import { ClientsModule, Transport } from '@nestjs/microservices';

import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
	imports: [
		ClientsModule.register([
			{
				name: 'NOTIFICATION_SERVICE',
				transport: Transport.RMQ,
				options: {
					urls: [
						'amqps://ciifbqid:jsOsM1MUHJ8jM4PEg-Lmce8LPSImIxTK@shark.rmq.cloudamqp.com/ciifbqid',
					],
					queue: 'notification_queue',
					queueOptions: {
						durable: false,
					},
				},
			},
		]),
	],
	controllers: [OrdersController],
	providers: [OrdersService],
})
export class OrdersModule {}
