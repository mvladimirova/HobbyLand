import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ScoreBoardRoutingModule } from './score-board-routing.module';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { ScoreBoardService } from './score-board.service';

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
  providers: [ScoreBoardService],
})
export class ScoreBoardModule {}
