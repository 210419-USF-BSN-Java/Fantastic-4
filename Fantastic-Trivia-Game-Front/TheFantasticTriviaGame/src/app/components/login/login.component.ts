import { Component, OnInit } from '@angular/core';
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
  user?: User;

  constructor(private userCredValidation: InputValidationService, private auth: AuthService) { }

  ngOnInit(): void {
  }

  validateCredentials(username: string, password: string): void {
  
    let isValidUsername = this.userCredValidation.validateUsername(username);
    let isValidPassword = this.userCredValidation.validateUsername(password);
    //validate username and password here

    this.auth.login("user", "pass").subscribe(response => {
      console.log("this is : " + response);
      this.user = response; 
      //replace dummy user
      //this.user = { id: 1, username: 'username', password: 'password', email: 'email@Test.com' };
      //console
    },

      error => {
        this.errorMsg = error;
        if (error.status == 404) {
          //fix method
          this.message = 'Please contact system administrator.';
        } else {
          this.message = 'Invalid username or password. Please try again.';
        }
      });

  }


}


