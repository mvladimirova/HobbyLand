import { Injectable } from '@nestjs/common';

@Injectable()
export class ScoresService {
  public getData() {
    return 'this will get all scores';
  }
}
