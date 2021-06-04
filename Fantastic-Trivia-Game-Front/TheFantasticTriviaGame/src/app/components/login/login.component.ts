import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { InputValidationService } from 'src/app/services/input-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string = '';
  errorMsg?: string;
  public user?: User;
  // @Output() gotUserEvent = new EventEmitter<User>();


  constructor(private userCredValidation: InputValidationService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  validateCredentials(username: string, password: string): void {

    let isValidUsername = this.userCredValidation.validateUsername(username);
    let isValidPassword = this.userCredValidation.validateUsername(password);
    //validations here

    const myObserver = {
      next: (response: any) => {
        console.log("in db");
        if(this.auth.parseToken()[1] ==1){
          this.router.navigate(['new-game']);
        }else{
          this.router.navigate(['new-category']);
        }
      },
      error: (error: Error) => {
        console.error("NOT in DB"); this.message = "Credentials not valid";
      }
    };
    this.auth.login(username, password).subscribe(myObserver);
    
  }


}


