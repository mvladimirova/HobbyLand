import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ScoresController } from './scores.controller';
import { ScoresService } from './scores.service';
import { Score } from './entities/score.entity';
import { Player } from './entities/player.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Score, Player])],
  controllers: [ScoresController],
  providers: [ScoresService],
})
export class ScoresModule {}
