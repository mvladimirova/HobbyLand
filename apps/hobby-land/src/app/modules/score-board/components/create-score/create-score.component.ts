import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ScoreForm } from '../../data/score.interface';

@Component({
  selector: 'hobby-land-create-score',
  templateUrl: './create-score.component.html',
  styleUrl: './create-score.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class CreateScoreComponent {
  public scoreForm = new FormGroup<ScoreForm>({
    date: new FormControl(new Date(), { nonNullable: true }),
    gameName: new FormControl('', { nonNullable: true }),
    players: new FormArray([this.createPlayer]),
    winner: new FormControl('', { nonNullable: true }),
  });

  get createPlayer(): FormControl<string> {
    return new FormControl('', { nonNullable: true });
  }
}
