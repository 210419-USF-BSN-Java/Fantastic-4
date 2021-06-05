import { AfterContentInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { InputValidationService } from 'src/app/services/input-validation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  totalScore: string = '1';

  edit: boolean = false;
  userId?: number;
  user: User;
  oldUserInfo: User;
  message: string = "1231232";
  password2:string='';

  constructor(private userServ: UserService, private auth: AuthService, private userValidation:InputValidationService) {
    this.user = { id: 0, username: "", password: "", email:'' };
    this.oldUserInfo = { id: 0, username: "", password: "" , email:""};
  }

  ngOnInit(): void {
    console.log("hello");
    const myObserver = {
      next: (response: User) => { this.user = response; console.log('observer got' + response); },
      error: (error: Error) => console.error(error),
    };
    this.userServ.getUser(this.auth.parseToken()[0]).subscribe(myObserver);
  }
  editUser(): void {
    this.edit = true;
    this.message ='';

    this.oldUserInfo.username = this.user.username;
    this.oldUserInfo.password = this.user.password;
    this.oldUserInfo.email = this.user.email;

  }
  dontEdit(): void {
    this.edit = false;

    this.user.id = this.oldUserInfo.id;
    this.user.username = this.oldUserInfo.username;
    this.user.password = this.oldUserInfo.password;
    this.user.email = this.oldUserInfo.email;
    this.password2="";

  }

  submitChanges(): void {
    if (this.password2 != this.user.password) {
      this.message = "Password must match."
    } else {
      let isValidEmail = this.userValidation.validateEmail(this.user.email);
      let isValidUsername =this.userValidation.validateUsername(this.user.username);
      let isValidPassword =this.userValidation.validatePassword(this.user.password);

      if(!isValidEmail){
        this.message = "Please enter valid email.";
      }else if(!isValidUsername){
        this.message = "Please enter valid username.";
      }else if (!isValidPassword){
        this.message = "Please enter valid password.";
      }else{
        const myObserver = {
          next: (response: any) => {this.editUser(); this.message = "Profile information updated." },
          error: (error: Error) => {
            console.error("NOT in DB"); this.message = "Profile information not updated.";
          }
        };
        this.userServ.editUser(this.user.id, this.user.username, this.user.password, this.user.email).subscribe(myObserver);
      }
      
    }

  }

}
