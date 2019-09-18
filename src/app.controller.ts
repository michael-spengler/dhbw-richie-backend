import { Controller, Get, Post, Body } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get('getTrainingData')
  public getTrainingData(): string {
    const result = this.appService.getTrainingData()
    return result
  }

  @Post('addTrainingData')
  public addTrainingData(@Body() entry): any {
    this.appService.addTrainingData(entry)

    return {status: 'success'}

  }

}
