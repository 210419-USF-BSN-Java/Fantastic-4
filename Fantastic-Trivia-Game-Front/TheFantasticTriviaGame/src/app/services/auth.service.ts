import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: User;
  token?: string;
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    let url: string = 'http://18.117.105.101:8090/';

    //url = 'http://localhost:8090/';

    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password)

    console.log(formData);

    //localStorage.setItem('token', "2:2");
    // console.log(localStorage.getItem('token'));
    return this.http.post<any>(url + 'user/login', formData).pipe(
      tap(x => {localStorage.clear();
        this.token = x.id + ":" + x.roleId;
        localStorage.setItem('token', this.token);
      }),      
      catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }

  clearSession():void{
    localStorage.clear();
  }
  parseToken(): number[] {
    let token = localStorage.getItem('token');
    if (!token) {
      //  console.log(0);
      return [0];

    } else {
      let tokenArr = token.split(':');
      let tokenN = new Array<number>(tokenArr.length);
      //   console.log(tokenArr.length);
      for (let i = 0; i < tokenArr.length; i++) {
        tokenN[i] = parseInt(tokenArr[i]);
        //   console.log(i);
      }
      //  console.log("token arr");
      //  console.log(tokenN);
      return tokenN;
    }
  }
}

