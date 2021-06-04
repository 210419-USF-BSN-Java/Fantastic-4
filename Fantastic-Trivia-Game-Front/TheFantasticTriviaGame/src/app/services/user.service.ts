import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string = 'http://18.117.105.101:8090/';

  constructor(private http: HttpClient) { }

  addUser(username: string, password: string, email: string): Observable<any> {

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("email", email);
     console.log( formData);

    return this.http.post(this.url + 'user/signup', formData,  {responseType: 'text'}).pipe(
      catchError(this.errorHandler));
  }
  editUser(username: string, password: string, email: string): Observable<any> {

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("email", email);

    return this.http.put(this.url + 'edit/', formData).pipe(
      catchError(this.errorHandler));
  }
  getUser(id: number): Observable<any> {
    return this.http.get(this.url + 'user/' + id).pipe(
      catchError(this.errorHandler));
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.url + 'user/delete/' + id).pipe(
      catchError(this.errorHandler));
  }
  banUser(id: number): Observable<any> {
    return this.http.put(this.url + 'user/delete/' + id, 1).pipe(
      catchError(this.errorHandler));
  }
  permitUser(id: number): Observable<any> {
    return this.http.put(this.url + 'user/delete/' + id, 1).pipe(
      catchError(this.errorHandler));
  }


  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
