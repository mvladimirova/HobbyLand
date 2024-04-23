import { FormArray, FormControl } from '@angular/forms';

export interface Score {
  date: Date;
  gameName: string;
  players: string[];
  winner: Player;
}

export interface Player {
  name: string;
  id: string;
}

export interface ScoreForm {
  date: FormControl<Date>;
  gameName: FormControl<string>;
  players: FormArray;
  winner: FormControl<string>;
}
