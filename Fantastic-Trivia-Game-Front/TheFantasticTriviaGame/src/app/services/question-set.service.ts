import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionSetService {
  //private url: string = 'http://18.117.105.101:8090/';
  private url: string = 'http://localhost:8090/';

  constructor(private http: HttpClient) { }

  getAllQuestionSets(): Observable<any> {
    return this.http.get(this.url + 'question-set').pipe(
      catchError(this.errorHandler));
  }
  /* to be implemented---
  getAllQuestionSetsByCatId():Observable<any>{
    return this.http.get(this.url+'user').pipe(
      catchError(this.errorHandler));
  }
  getQuestionsQuestionSetById():Observable<any>{
    return this.http.get(this.url+'user').pipe(
      catchError(this.errorHandler));
  }
  setScore():Observable<any>{
     let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("email", email);
     console.log( formData);
     

    return this.http.post(this.url + 'user/signup', formData,  {responseType: 'text'}).pipe(
      catchError(this.errorHandler));

  }*/
   addGame(catId: string, difficultyId: string, numQuestions: string): Observable<any> {

    let formData = new FormData();
    formData.append("categoryId", catId);
    formData.append("numQuestions", numQuestions);
    formData.append("difficultyId", difficultyId);
     console.log( formData);
     

    return this.http.post(this.url + 'question-set/new-game', formData).pipe(
      catchError(this.errorHandler));
  }

  deleteQuestionSet(id: number): Observable<any> {
    return this.http.delete(this.url + 'question-set/delete/' + id,{responseType: 'text'}).pipe(
      catchError(this.errorHandler));
  }


  

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
