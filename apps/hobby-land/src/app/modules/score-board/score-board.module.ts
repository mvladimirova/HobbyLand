import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
} from '@angular/material/dialog';

import { ScoreBoardRoutingModule } from './score-board-routing.module';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { ScoreBoardService } from './score-board.service';
import { CreateScoreComponent } from './components/create-score/create-score.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [ScoreBoardComponent, CreateScoreComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScoreBoardRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  exports: [ScoreBoardComponent],
  providers: [ScoreBoardService],
})
export class ScoreBoardModule {}
