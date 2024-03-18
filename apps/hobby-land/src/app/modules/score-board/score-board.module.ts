import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { ScoreBoardRoutingModule } from './score-board-routing.module';
import { ScoreBoardComponent } from './components/score-board/score-board.component';

@NgModule({
  declarations: [ScoreBoardComponent],
  imports: [CommonModule, ScoreBoardRoutingModule, MatTableModule],
  exports: [ScoreBoardComponent],
})
export class ScoreBoardModule {}
