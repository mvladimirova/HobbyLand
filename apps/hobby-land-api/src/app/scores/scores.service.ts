import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Score } from './entities/score.entity';

@Injectable()
export class ScoresService {
  constructor(
    @InjectRepository(Score) private scoreRepository: Repository<Score>
  ) {}

  public getData(): Promise<Score[]> {
    return this.scoreRepository.find({ relations: { winner: true } });
  }
}
