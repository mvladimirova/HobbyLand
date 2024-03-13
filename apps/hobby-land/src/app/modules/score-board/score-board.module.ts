import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreBoardRoutingModule } from './score-board-routing.module';
import { ScoreBoardComponent } from './components/score-board/score-board.component';


@NgModule({
  declarations: [
    ScoreBoardComponent
  ],
  imports: [
    CommonModule,
    ScoreBoardRoutingModule
  ],
  exports: [
    ScoreBoardComponent
  ]
})
export class ScoreBoardModule { }
