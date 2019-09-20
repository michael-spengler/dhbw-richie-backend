import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as fs from 'fs'
import cors = require('cors')

async function bootstrap() {
  const httpsOptions: any = {
    cert: fs.readFileSync(`/etc/letsencrypt/live/server-certificate/cert.pem`),
    key: fs.readFileSync(`/etc/letsencrypt/live/server-certificate/privkey.pem`),
  }

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  })
  // await app.listen(3000)
  // await app.listen(80)
  app.use(cors('https://dhbw-richie.de'))
  await app.listen(443)
}
bootstrap()
