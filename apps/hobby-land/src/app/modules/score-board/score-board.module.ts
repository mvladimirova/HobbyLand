import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { ScoreBoardRoutingModule } from './score-board-routing.module';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ScoreBoardComponent],
  imports: [
    CommonModule,
    ScoreBoardRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [ScoreBoardComponent],
})
export class ScoreBoardModule {}
