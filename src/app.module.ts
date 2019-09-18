import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramService } from './telegram/telegram.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TelegramService],
})
export class AppModule {}
