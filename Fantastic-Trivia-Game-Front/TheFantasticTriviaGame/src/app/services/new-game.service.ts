import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { QuestionSet, category, difficulty } from 'src/app/models/questionSet';


@Injectable({
  providedIn: 'root'
})


export class NewGameService {

  //call from the java api

  constructor(private http: HttpClient, private messageService: MessageService) { }




  getAllQuestionSets():Observable<QuestionSet[]>{
    let url: string = 'http://18.117.105.101:8090/';

    url = 'http://localhost:8090/';

    return this.http.get<QuestionSet[]>(url+ '/questionset').pipe(
      tap(_ => this.log('fetched question sets')),
      catchError(this.handleError<QuestionSet[]>('getAllQuestionSets', []))
    )


  }


private log(message: string) {
  this.messageService.add(`New Game Service: ${message}`);
}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
