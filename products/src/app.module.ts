import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
	imports: [RabbitmqModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
