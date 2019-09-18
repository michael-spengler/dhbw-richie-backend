import { Injectable } from '@nestjs/common'
import * as fs from 'fs-sync'

@Injectable()
export class AppService {

  private ourPathToFile = `${__dirname}/../dhbw-third-semester-training-data/training-data.json`

  getTrainingData(): string {
    const fileContent = fs.readJSON(this.ourPathToFile)
    return fileContent
  }

  addTrainingData(entry): void {
    const fileContent = fs.readJSON(this.ourPathToFile)
    fileContent.push(entry)

    fs.write(this.ourPathToFile, JSON.stringify(fileContent))

  }
}
