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
 // @Output() gotUserEvent = new EventEmitter<User>();
  

  constructor(private userCredValidation: InputValidationService, private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  

  validateCredentials(username: string, password: string): void {
  
    let isValidUsername = this.userCredValidation.validateUsername(username);
    let isValidPassword = this.userCredValidation.validateUsername(password);
   
   //dummy data remove when login issues is fixed
  // this.user ={id:1,username:username, password:password, email:'', roleId:1};
  // console.log(this.user);
  // this.gotUserEvent.emit(this.user);
    //validate username and password here

   
    
    const myObserver = {
      next: (response: any) => {this.user = response; console.log('observer got' + response.headers.get('Authorization'));},
      error: (error: Error) => console.error(error),
    };
    this.auth.login(username,password).subscribe(myObserver);

      this.router.navigate(['new-game']);
     //this.router.navigate(['new-category']);
  }


}


