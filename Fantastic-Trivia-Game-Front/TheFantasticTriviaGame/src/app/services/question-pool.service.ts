import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionPoolService {

  private url: string = 'http://localhost:8090/';

  constructor(private http: HttpClient) {}

  getQuestionPool(id:number):Observable<any> {
    return this.http.get(this.url + 'question-set/'+ id).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
