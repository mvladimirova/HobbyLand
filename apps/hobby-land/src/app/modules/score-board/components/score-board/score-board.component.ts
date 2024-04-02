import { Component, OnDestroy, OnInit } from '@angular/core';
import { Score } from '../../data/score.interface';
import { ScoreBoardService } from '../../score-board.service';
import { Subscription } from 'rxjs';

const SCORE_DATA: Score[] = [
  {
    date: new Date(),
    gameName: 'Lorcana',
    players: [
      { name: 'Bozho', winner: true },
      { name: 'Mimi', winner: false },
    ],
  },
  {
    date: new Date(),
    gameName: 'Root',
    players: [
      { name: 'Ani', winner: true },
      { name: 'Iasen', winner: false },
      { name: 'Bozho', winner: false },
      { name: 'Mimi', winner: false },
    ],
  },
];

@Component({
  selector: 'hobby-land-score-board',
  templateUrl: './score-board.component.html',
  styleUrl: './score-board.component.scss',
})
export class ScoreBoardComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['date', 'gameName', 'players', 'winner'];
  public dataSource = SCORE_DATA;

  private _subscription = new Subscription();

  constructor(private _scoresService: ScoreBoardService) {}

  public ngOnInit(): void {
    this._subscription.add(this._scoresService.getScores().subscribe());
  }

  public ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
