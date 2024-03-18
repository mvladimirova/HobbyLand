import { Component } from '@angular/core';
import { Score } from '../../data/score.interface';

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
export class ScoreBoardComponent {
  displayedColumns: string[] = ['date', 'gameName', 'players', 'winner'];
  dataSource = SCORE_DATA;
}
