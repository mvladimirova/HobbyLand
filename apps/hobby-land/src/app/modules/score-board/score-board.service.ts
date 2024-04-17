import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Score } from './data/score.interface';

@Injectable({
  providedIn: 'root',
})
export class ScoreBoardService {
  constructor(private _http: HttpClient) {}

  public getScores(): Observable<Score[]> {
    return this._http.get<Score[]>('api/scores').pipe();
  }
}
