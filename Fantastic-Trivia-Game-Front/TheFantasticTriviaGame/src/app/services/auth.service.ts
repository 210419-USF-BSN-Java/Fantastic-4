import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<User> {
    let credentials = {
      username: username,
      password: password
    };

    //replace url
    return this.http.post<User>('http://localhost:8080/api/authenticate', credentials).pipe(
     catchError(this.errorHandler));
   //console.log(this.http.get<User>('api/authenticate'));

   //return this.http.get<User>('api/authenticate');
  }

  errorHandler(error: HttpErrorResponse) {    
    return throwError(error.status);
  }
}
