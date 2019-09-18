import { Injectable } from '@nestjs/common'
import TeleBot = require('telebot')
import { ConfigurationReader } from 'configuration-reader'
import * as path from 'path'

@Injectable()
export class TelegramService {
  constructor() {
    // you can adjust the filename here - remember updating .gitignore
    const yourFileName: string = '../../.env'

    const configurationReader: ConfigurationReader = new ConfigurationReader(
      path.join(__dirname, yourFileName),
    )

    const ourSecretToken: string = configurationReader.get('BOT_TOKEN')

    const bot = new TeleBot(ourSecretToken)

    bot.on('text', msg => msg.reply.text(`Selber: ${msg.text}`))

    bot.start()
  }
}
