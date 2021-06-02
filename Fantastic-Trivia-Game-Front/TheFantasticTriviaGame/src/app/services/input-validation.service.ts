import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputValidationService {

  constructor() { }

  validateUsername(username: string): boolean {
    if (username === '' || username == null) {
      return false;
    }
    return true;
  }

  validatePassword(password: string): boolean {
    if (password == '' || password == null) {
      return false;
    }
    return true;
  }

  validateEmail(email: string): boolean {
    if (email == '' || email == null) {
      return false;
    }else if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      return false;
    }
    return true;
  }
}
