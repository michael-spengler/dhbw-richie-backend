import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramService } from './telegram/telegram.service';
import { NlpService } from './nlp/nlp.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TelegramService, NlpService],
})
export class AppModule {}
