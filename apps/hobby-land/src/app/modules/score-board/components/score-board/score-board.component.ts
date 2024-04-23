import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { Score } from '../../data/score.interface';
import { ScoreBoardService } from '../../score-board.service';
import { CreateScoreComponent } from '../create-score/create-score.component';

@Component({
  selector: 'hobby-land-score-board',
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.scss',
})
export class ScoreBoardComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['date', 'gameName', 'players', 'winner'];
  public dataSource!: Score[];

  private _subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private _scoresService: ScoreBoardService
  ) {}

  public ngOnInit(): void {
    this._subscription.add(
      this._scoresService
        .getScores()
        .subscribe((scores) => (this.dataSource = scores))
    );
  }

  public addScore(): void {
    this.dialog.open(CreateScoreComponent);
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
