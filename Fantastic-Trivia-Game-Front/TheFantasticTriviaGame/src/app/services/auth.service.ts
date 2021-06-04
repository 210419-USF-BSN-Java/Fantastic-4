import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<string> {
    let url: string = 'http://18.117.105.101:8090/';
    
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password)

    console.log(formData);

    localStorage.setItem('token', "2:1");
    console.log(localStorage.getItem('token'));
    return this.http.post<string>(url + '/user/login', formData).pipe(
      catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
  parseToken(): number[] {
    let token = localStorage.getItem('token');
    if (!token) {
      console.log(0);
      return [0];

    } else {
      let tokenArr = token.split(':');
      let tokenN = new Array<number>(tokenArr.length);
      console.log(tokenArr.length);
      for (let i = 0; i < tokenArr.length; i++) {
        tokenN[i] = parseInt(tokenArr[i]);
        console.log(i);
      }
      console.log("token arr");
      console.log(tokenN);
      return tokenN;
    }
  }
}

