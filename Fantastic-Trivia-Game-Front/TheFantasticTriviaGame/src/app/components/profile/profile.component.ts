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
  //for html template 
  totalScore: string = '';
  topCategory: string = '';
  overallRank: string = '';
  topScore: string = "";

  recentScore: string = '';
  recentCategory: string = '';

  message: string = "";

  //for component
  edit: boolean = false;
  
  //profile information
  userId?: number;
  user: User;
  oldUserInfo: User;  
  password2: string = '';

  scoreObj: Score[] = [];
  
  //allows for user to see score for games played
  gamesList:string[]=[];  
  scoreList:number[]=[]
  selectedGame:number=0;

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

        if (this.scoreObj.length > 0) {
          this.recentScore = "" + this.scoreObj[this.scoreObj.length - 1].score;          
          this.recentCategory = "" + category[this.scoreObj[this.scoreObj.length - 1].categoryId - 9];

          this.totalScore = "" + this.getTotalScore();
          this.overallRank = "" + this.getOverallRank();
          this.topCategory = this.getTopCategory();
          this.totalScore = "" + this.getTotalScore();
          this.topScore = "" + this.getTopScore();

          //for game column
          this. populateGamesPlayedList();

        }

      },
      error: (error: Error) => console.error(error),
    };
    this.lbServ.getUserScore(this.auth.parseToken()[0]).subscribe(myObserver1);



  }
  private populateGamesPlayedList(){
    for (let scoreItem of this.scoreObj) {
      this.gamesList.push(scoreItem.setId+" - "+category[scoreItem.categoryId-9]);
      this.scoreList.push(scoreItem.score);
    }
  }

  private getOverallRank(): number {
    let rankSum: number = 0;
    for (let scoreItem of this.scoreObj) {
      rankSum = scoreItem.rank + rankSum;
    }
    return Math.floor(rankSum / this.scoreObj.length);
  }

  private getTopScore(): number {
    let topScore: number = 0;
    for (let scoreItem of this.scoreObj) {
      if (scoreItem.score > topScore) {
        topScore = scoreItem.score;
      }
    }
    return topScore;
  }
  private getTopCategory(): string {
    let topIndex: number = 0;
    let topScore: number = 0;
    for (let i = 0; i < this.scoreObj.length; i++) {
      if (this.scoreObj[i].score > topScore) {
        topScore = this.scoreObj[i].score;
        topIndex = i;
      }
    }
    return category[(this.scoreObj[topIndex].categoryId - 9)];
  }
  private getTotalScore(): number {
    let totalScore: number = 0;
    for (let scoreItem of this.scoreObj) {
      totalScore = totalScore + scoreItem.score;
    }
    return totalScore;
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
