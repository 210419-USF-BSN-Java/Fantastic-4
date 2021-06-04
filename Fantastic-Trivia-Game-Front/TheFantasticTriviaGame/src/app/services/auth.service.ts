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
  login(username: string, password: string): Observable<String> {
    let credentials = {
      username: username,
      password: password
    };

    //replace url
    var formData: any = new FormData();
    formData.append("username", username);
  	formData.append("password", password);

  	return this.http.post<String>('http://localhost:8080/user/login', formData);
    //return this.http.post<User>('http://localhost:8080/user/authenticate', credentials).pipe(
     //catchError(this.errorHandler));
   //console.log(this.http.get<User>('api/authenticate'));

   //return this.http.get<User>('api/authenticate');
  }

  errorHandler(error: HttpErrorResponse) {    
    return throwError(error.status);
  }
}
