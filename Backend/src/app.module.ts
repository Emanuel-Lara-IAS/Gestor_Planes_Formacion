import { Module } from '@nestjs/common';
import { AppService } from './app.service.js';
import { AppController } from './app.controller.js';
import { HealthController } from './presentation/controllers/healt.controller.js';

@Module({
  imports: [],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
