import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ScoreBoardService {
  constructor(private _http: HttpClient) {}

  public getScores(): Observable<unknown> {
    return this._http
      .get('api/scores')
      .pipe(tap((scores) => console.log(scores)));
  }
}
