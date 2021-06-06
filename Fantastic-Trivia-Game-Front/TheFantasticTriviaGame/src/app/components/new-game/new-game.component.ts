
import { Component, OnInit } from '@angular/core';
import { QuestionSet, category, difficulty } from 'src/app/models/questionSet';

import { QuestionSetService } from 'src/app/services/question-set.service';



@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

    questions: QuestionSet[] = [];


    id:number[] = []
    categoryNames:string[]=[];
    difficultyNames:string[]=[];
  constructor(private qSetServ: QuestionSetService) {

  }

  ngOnInit(): void {
    const myObserver = {
      next: (response: any) => {this.questions= response;
      console.log(response),

      this.categoryNames = new Array<string>(this.questions.length);
      for (let i = 0; i < this.questions.length; i++) {
        this.categoryNames[i] = category[(this.questions[i].categoryId - 9)];
        console.log(this.categoryNames[i]);
        console.log(this.questions[i]);
      }

      // this.id = new Array<number>(this.questions.length);
      // for (let i = 0; i < this.questions.length; i++) {
      //   this.id[i] = this.questions[i].id;
      //   console.log(this.id[i]);

      // }

      this.difficultyNames = new Array<string>(this.questions.length);
      for (let j = 0; j < this.questions.length; j++) {
        this.difficultyNames[j] = difficulty[(this.questions[j].difficultyId - 1)];
        console.log(this.difficultyNames[j]);
      }
    },
      error: (error: Error) => console.log(error)
    };
    this.qSetServ.getAllQuestionSets().subscribe(myObserver);
  }

  searchByCatDiff(){

  }



}
