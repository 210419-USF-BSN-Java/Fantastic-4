import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/questionSet';
import { Score } from 'src/app/models/score';
import { User } from 'src/app/models/user';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-leaderboard-u',
  templateUrl: './leaderboard-u.component.html',
  styleUrls: ['./leaderboard-u.component.css']
})
export class LeaderboardUComponent implements OnInit {

  leaderboardByUser: OverallLeaderboardByUser[] = [];
  userIdList: number[] = [];
  scoreList: Score[] = [];
  userList: User[] = [];

  constructor(private lServ: LeaderboardService, private uServ: UserService) { }

  ngOnInit(): void {

    const myObserver = {
      next: (response: Score[]) => {
        console.log(response);
        this.scoreList = response;
        this.populateUserIdsWithScore();
        this.getUsernames();
    
        
      },
      error: (error: Error) => console.error(error)

    };
    this.lServ.getAllScores().subscribe(myObserver);
  }

  private populateUserIdsWithScore(): void {

    for (let scoreItem of this.scoreList) {
      //get all users
      if (this.userIdList.length == 0) {

        console.log(0);
        this.userIdList.push(scoreItem.userId);
      } else {
        let isElementInArray: boolean = false;
        for (let i = 0; i < this.userIdList.length; i++) {
          if (this.userIdList[i] == scoreItem.userId) {
            isElementInArray = true;
          }
        }
        if (!isElementInArray) {
          this.userIdList.push(scoreItem.userId);
        }
      }
    }

  }
  
  private async getUsernames(): Promise<void> {
   
    for (let i= 0; i <this.userIdList.length; i++) {
     
     this.userList[i] = await this.uServ.getUser(this.userIdList[i]).toPromise();
     
    }
    console.log(this.userList);
    this.aggrigateUserData();

  }
  private aggrigateUserData(): void {

    for (let i = 0; i < this.userIdList.length; i++) {

      //getting total score
      let totalScore = 0;
      let maxScore = 0;
      let topCategory: string = '';
      for (let scoreItem of this.scoreList) {
        if (scoreItem.userId == this.userIdList[i]) {
          totalScore = totalScore + scoreItem.score;
          if (maxScore < scoreItem.score) {
            maxScore = scoreItem.score;
            topCategory = category[scoreItem.categoryId - 9];
          }
        }
      }
      
      let userName:string="";
      for(let user of this.userList){
        console.log("user is "+user);
        if(user.id == this.userIdList[i]){
          userName = user.username;
        }
      }


      let data: OverallLeaderboardByUser = { totalScore: totalScore, topCategory: topCategory, rank: 0, userId: this.userIdList[i], username:userName };
      this.leaderboardByUser.push(data);

    }

    this.leaderboardByUser = this.leaderboardByUser.sort((a, b) => a.totalScore < b.totalScore ? 1 : a.totalScore > b.totalScore ? -1 : 0);
    for (let i = 0; i < this.leaderboardByUser.length; i++) {
      this.leaderboardByUser[i].rank = i + 1;
    }
  }
}

interface OverallLeaderboardByUser {
  totalScore: number,
  topCategory: string,
  rank: number,
  userId: number,
  username: string
}
