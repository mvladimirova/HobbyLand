import { Controller, Get } from '@nestjs/common';
import { ScoresService } from './scores.service';

@Controller('scores')
export class ScoresController {
  constructor() {}
  @Get()
  getData() {
    // return this.appService.getData();
  }
}
