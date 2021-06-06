import { QuestionPoolService } from './../../services/question-pool.service';
import { QuestionPool } from './../../models/questionPool';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionSet, category, difficulty } from 'src/app/models/questionSet';
import { QuestionSetService } from 'src/app/services/question-set.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: QuestionSet[]=[]
  question:string='';
   difficulty:string ='';
   topic:string='';


  questionpool: QuestionPool[] = [];


  constructor(private qpServ:QuestionPoolService,
    private qSetServ:QuestionSetService,
    private router:ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {

    let questionSetIdStr = this.router.snapshot.paramMap.get('id');

    let questionSetId:number = 0;

    if (questionSetIdStr!=null){
      questionSetId =parseInt(questionSetIdStr);
      console.log(questionSetId);
    }
    //get the questionset information
    const myObserver1 = {
      next: (response: any) => {this.questions= response;
      console.log(response);

     for (let i = 0; i < this.questions.length; i++) {
       if(questionSetId == this.questions[i].id ){
        this.question = category[(this.questions[i].categoryId - 9)];
        this.difficulty =  difficulty[(this.questions[i].difficultyId - 1)];
       }
      }
    },
      error: (error: Error) => console.log(error)
    };
    this.qSetServ.getAllQuestionSets().subscribe(myObserver1);

    const myObserver = {
      next: (response: any) => {
        this.questionpool= response;
      console.log(response)

    },
    error: (error: Error) => console.log(error)
  };
  this.qpServ.getQuestionPool(questionSetId).subscribe(myObserver);

}

goBack():void{
  this.location.back();
}

}
