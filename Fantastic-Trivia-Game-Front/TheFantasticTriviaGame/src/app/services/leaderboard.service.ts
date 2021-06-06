import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  //private url: string = 'http://18.117.105.101:8090/';
  private url: string = 'http://localhost:8090/';

  constructor(private http: HttpClient) { }

  getUserScore(id: number): Observable<any> {
    return this.http.get(this.url + 'leaderboard/user/' + id).pipe(
      catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

}
