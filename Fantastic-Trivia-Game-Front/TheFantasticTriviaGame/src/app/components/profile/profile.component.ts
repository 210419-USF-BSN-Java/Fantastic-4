import { category } from 'src/app/models/questionSet';
import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/models/score';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { InputValidationService } from 'src/app/services/input-validation.service';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  //display  
  totalScore: string = '1';

  recentScore: string = '';
  recentCategory: string = '';
  overallRank: string = '';



  message: string = "";

  //for component
  edit: boolean = false;
  userId?: number;
  user: User;
  oldUserInfo: User;
  scoreObj: Score[] = [];

  password2: string = '';

  constructor(private userServ: UserService, private auth: AuthService, private userValidation: InputValidationService, private lbServ: LeaderboardService) {
    this.user = { id: 0, username: "", password: "", email: '' };
    this.oldUserInfo = { id: 0, username: "", password: "", email: "" };

  }



  ngOnInit(): void {

    const myObserver = {
      next: (response: User) => this.user = response,
      error: (error: Error) => console.error(error),
    };
    this.userServ.getUser(this.auth.parseToken()[0]).subscribe(myObserver);

    const myObserver1 = {
      next: (response: Score[]) => {
        this.scoreObj = response;

        console.log(category[0]);
        this.recentScore = "" + this.scoreObj[this.scoreObj.length - 1].score;
        this.overallRank = "" + this.scoreObj[this.scoreObj.length - 1].rank;
        this.recentCategory = "" + category[this.scoreObj[this.scoreObj.length - 1].categoryId - 9];
        console.log(this.getOverallRank());
        console.log(this.getTopScore());
        console.log(this.getTopCategory());
        console.log(this.getTotalScore());

      },
      error: (error: Error) => console.error(error),
    };
    this.lbServ.getUserScore(this.auth.parseToken()[0]).subscribe(myObserver1);



  }

  getOverallRank():number{
    return 1;
  }

  getTopScore(): number {
    return 1;
  }
  getTopCategory(): number {
    return 1;
  }
  getTotalScore(): number {
    return 1;
  }
  editUser(): void {
    this.edit = true;
    this.message = '';

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
    this.password2 = "";

  }

  submitChanges(): void {
    if (this.password2 != this.user.password) {
      this.message = "Password must match."
    } else {
      let isValidEmail = this.userValidation.validateEmail(this.user.email);
      let isValidUsername = this.userValidation.validateUsername(this.user.username);
      let isValidPassword = this.userValidation.validatePassword(this.user.password);

      if (!isValidEmail) {
        this.message = "Please enter valid email.";
      } else if (!isValidUsername) {
        this.message = "Please enter valid username.";
      } else if (!isValidPassword) {
        this.message = "Please enter valid password.";
      } else {
        const myObserver = {
          next: (response: any) => { this.editUser(); this.message = "Profile information updated." },
          error: (error: Error) => {
            console.error("NOT in DB");
            this.message = "Profile information not updated.";
          }
        };
        this.userServ.editUser(this.user.id, this.user.username, this.user.password, this.user.email).subscribe(myObserver);
      }

    }

  }

}
