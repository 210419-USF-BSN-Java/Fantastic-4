import { Component, OnInit } from '@angular/core';
import { InputValidationService } from 'src/app/services/input-validation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message:string='';

  constructor(private validation :InputValidationService, private uServ: UserService ) { }

  ngOnInit(): void {
  }

  signup(username:string, password:string, pass2:string,email:string):void{
    
    let isValidUsername = this.validation.validateUsername(username);
    let isValidPassword = this.validation.validatePassword(password);
    let isValidEmail = this.validation.validateEmail(email);
    if (!isValidUsername){
      this.message = "Invalid username. Please try again."
    }else if(!isValidPassword){
      this.message = "Invalid password. Please try again."
    }else if(pass2 !== password){
      this.message = "Passwords entered do not match"
    }
    else if(!isValidEmail){
      this.message = "Invalid email. Please try again."
    }else{
      this.uServ.addUser(username,password,email);
    }
  }

}
