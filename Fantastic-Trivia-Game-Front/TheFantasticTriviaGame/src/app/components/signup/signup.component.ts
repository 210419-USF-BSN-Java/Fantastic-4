import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InputValidationService } from 'src/app/services/input-validation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message: string = '';

  constructor(private validation: InputValidationService, private uServ: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(username: string, password: string, pass2: string, email: string): void {

    const myObserver = {
      next: (response: any) => {this.message = response+'.'+ ' Returning to login page';      
      setTimeout(() => {
           this.router.navigate(['login']);
          },3000);    
    
    }      
        ,
      error: (error: Error) =>   { console.log(error);
        this.message = 'Could not set up account. Please contact system administrator.';}
          
      
    };
    
    
    
    
    let isValidUsername = this.validation.validateUsername(username);
    let isValidPassword = this.validation.validatePassword(password);
    let isValidEmail = this.validation.validateEmail(email);
    if (!isValidUsername) {
      this.message = "Invalid username. Please try again."
    } else if (!isValidPassword) {
      this.message = "Invalid password. Please try again."
    } else if (pass2 !== password) {
      this.message = "Passwords entered do not match"
    }
    else if (!isValidEmail) {
      this.message = "Invalid email. Please try again."
    } else {
      this.uServ.addUser(username, password, email).subscribe(myObserver);
        
        /*response => response
       // this.message ='Signup successful. Returning to login page...';
       // setTimeout(() => {
      //    this.router.navigate(['login']);
     //   },3000);
      ,
        error => console.log(error),
          //this.message = 'Could not set up account. Please contact system administrator.';
      
      }*/
    }
    
  }

}
