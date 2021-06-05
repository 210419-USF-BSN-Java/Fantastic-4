import { NewGameService } from './../../services/new-game.service';
import { Component, OnInit } from '@angular/core';
import { QuestionSet, category, difficulty } from 'src/app/models/questionSet';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {



    questions: QuestionSet[] = [
      { id:1, categoryId: 2, numQuestions: 5, difficultyId: 1 },
      { id:2, categoryId: 3, numQuestions: 5, difficultyId:3 },
      { id: 3, categoryId: 4, numQuestions: 5, difficultyId: 2 },
      { id: 4, categoryId: 1, numQuestions: 5, difficultyId: 1 }]

    //  questions: QuestionSet[] = [];

    categoryNames:string[]=[];
    difficultyNames:string[]=[];
  constructor(private getAll: NewGameService) { }

  ngOnInit(): void {
    //this.getAllQuestionSets();


    this.categoryNames = new Array<string>(this.questions.length);
    for(let i = 0; i<this.questions.length; i++){
      this.categoryNames[i] = category[(this.questions[i].categoryId-1)];
    }


    this.difficultyNames = new Array<string>(this.questions.length);
    for(let j = 0; j<this.questions.length; j++){
      this.difficultyNames[j] = difficulty[(this.questions[j].difficultyId-1)];
    }


  }

  getAllQuestionSets(): void{
    this.getAll.getAllQuestionSets().subscribe((questions: QuestionSet[])=>{
      this.questions = questions;

    });


  }

}
