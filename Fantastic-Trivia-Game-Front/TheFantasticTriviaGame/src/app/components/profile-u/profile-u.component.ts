import { AfterContentInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { category } from 'src/app/models/questionSet';
import { Score } from 'src/app/models/score';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-profile-u',
  templateUrl: './profile-u.component.html',
  styleUrls: ['./profile-u.component.css']
})
export class ProfileUComponent implements AfterContentInit {

  @Input()
  userId: number = 0;

  //for html template 
  totalScore: string = '';
  topCategory: string = '';
  overallRank: string = '';
  topScore: string = "";

  recentScore: string = '';
  recentCategory: string = '';

  user: User;

  scoreObj: Score[] = [];

  //allows for user to see score for games played
  gamesList: string[] = [];
  scoreList: number[] = []
  selectedGame: number = 0;

  constructor(private userServ: UserService, private lbServ: LeaderboardService) {
    this.user = { id: 0, username: "", password: "", email: '' };
  }

  ngAfterContentInit(): void {

    const myObserver = {
      next: (response: User) => { this.user = response; console.log('observer got' + response); },
      error: (error: Error) => console.error(error),
    };
    this.userServ.getUser(this.userId).subscribe(myObserver);

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
          this.populateGamesPlayedList();

        }

      },
      error: (error: Error) => console.error(error),
    };
    this.lbServ.getUserScore(this.userId).subscribe(myObserver1);
  }

  private populateGamesPlayedList() {
    for (let scoreItem of this.scoreObj) {
      this.gamesList.push(scoreItem.setId + " - " + category[scoreItem.categoryId - 9]);
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

}
