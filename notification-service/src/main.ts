import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.connectMicroservice<MicroserviceOptions>({
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
	});
	await app.startAllMicroservices();
	await app.listen(4000);
}
bootstrap();
