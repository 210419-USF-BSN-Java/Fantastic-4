
import { difficulty } from './../models/questionSet';
import { QuestionPool, poolCategory, poolDifficulty } from './../models/questionPool';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
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

  getQuestionPool(numQuestions:string, categoryId:string, setDiff:string):Observable<any> {


    const params = new HttpParams().set('amount',10).set('category',9).set('difficulty','easy').set('type','multiple');

    return this.http.get('https://opentdb.com/api.php', { params: params }).pipe(catchError(this.errorHandler)
    , map(res => res)
    );
//this.url + 'question-set/'+ id
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
