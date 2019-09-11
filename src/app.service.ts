import { Injectable } from '@nestjs/common'
import * as fs from 'fs-sync'

@Injectable()
export class AppService {
  getTrainingData(): string {
    const ourPathToFile = `${__dirname}/../dhbw-third-semester-training-data/training-data.json`
    const fileContent = fs.readJSON(ourPathToFile)
    return fileContent
  }
}
