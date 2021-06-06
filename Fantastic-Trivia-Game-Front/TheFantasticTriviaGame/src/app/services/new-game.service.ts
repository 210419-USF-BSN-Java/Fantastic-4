import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { QuestionSet, category, difficulty } from 'src/app/models/questionSet';


@Injectable({
  providedIn: 'root'
})


export class NewGameService {

  //call from the java api

  private url:string  = 'http://localhost:8090/';

  constructor(private http: HttpClient) { }



  getAllQuestionSets():Observable<any>{
    return this.http.get(this.url+'question-set').pipe(
      catchError(this.errorHandler));
  }

  searchQuestionSetsByDiff(term: string): Observable<any>{
    if(!term.trim()){
      return of([]);
    }

    return this.http.get<any>(`${this.url+'question-set'}/?Difficulty=${term}`).pipe(
      catchError(this.errorHandler));


  }



  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
