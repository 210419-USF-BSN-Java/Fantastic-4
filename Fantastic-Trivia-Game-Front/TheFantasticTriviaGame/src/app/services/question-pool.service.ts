import { difficulty } from './../models/questionSet';
import { QuestionPool, poolCategory, poolDifficulty } from './../models/questionPool';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of,from, forkJoin } from 'rxjs';
import { catchError, map, mapTo, pluck, switchMap } from 'rxjs/operators';
import { flatten } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class QuestionPoolService {

  private url: string = 'http://localhost:8090/';

  constructor(private http: HttpClient) {}

  getQuestionPool(id:number):Observable<QuestionPool[]> {

    return this.http.get<QuestionPool[]>(`${this.url}question-set/${id}`).pipe(catchError(this.errorHandler)

    );
//this.url + 'question-set/'+ id
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
