import { ClientsModule, Transport } from '@nestjs/microservices';

import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
	controllers: [OrdersController],
	providers: [OrdersService],
	imports: [
		ClientsModule.register([
			{
				name: 'NOTIFICATION_SERVICE',
				transport: Transport.RMQ,
				options: {
					urls: [
						'amqps://ciifbqid:jsOsM1MUHJ8jM4PEg-Lmce8LPSImIxTK@shark.rmq.cloudamqp.com/ciifbqid',
					],
					queue: 'NOTIFICATION_QUEUE',
					queueOptions: {
						durable: false,
					},
				},
			},
		]),
	],
})
export class OrdersModule {}
