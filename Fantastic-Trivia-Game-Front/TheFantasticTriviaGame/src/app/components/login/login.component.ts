import { Component, OnInit, Output,EventEmitter } from '@angular/core';
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
  @Output() gotUserEvent = new EventEmitter<User>();
  

  constructor(private userCredValidation: InputValidationService, private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  

  validateCredentials(username: string, password: string): void {
  
    let isValidUsername = this.userCredValidation.validateUsername(username);
    let isValidPassword = this.userCredValidation.validateUsername(password);
   
   //dummy data remove when login issues is fixed
   this.user ={id:1,username:username, password:password, email:'', roleId:1};
   console.log(this.user);
   this.gotUserEvent.emit(this.user);
    //validate username and password here

    this.auth.login(username, password);
    
    /*.subscribe(response => {
      console.log("this is : " + response);
      console.log(response);
     // this.user = response; 
      //replace dummy user
     // this.user = { id: 1, username: 'username', password: 'password', email: 'email@Test.com', roleId :1 };
      console.log(this.user);
      this.gotUserEvent.emit(this.user);
    },

      error => {
        this.errorMsg = error.message;
        if (error.status == 404) {
          //fix method
          this.message = 'Please contact system administrator.';
        } else {
         // this.message = 'Invalid username or password. Please try again.';
          console.log(error);
          //remove code below
         // this.user = { id: 1, username: 'username', password: 'password', email: 'email@Test.com', roleId :1};
         // console.log(this.user);
        }
      });*/

      this.router.navigate(['new-game']);
  }


}


