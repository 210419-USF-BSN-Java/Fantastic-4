
import { QuestionPoolService } from './../../services/question-pool.service';
import { QuestionPool, poolCategory, poolDifficulty } from './../../models/questionPool';
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
  poolQuestion:string[] = [];
  rightAnswer:string[]= [];
  wrongAnswer:string= '';

  numbQuest:string = '';
  catId:string = '';


  constructor(private qpServ:QuestionPoolService,
    private qSetServ:QuestionSetService,
    private router:ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {

    let questionSetIdStr = this.router.snapshot.paramMap.get('id');

    let questionSetId:number = 0;



    if (questionSetIdStr!=null){
      questionSetId =parseInt(questionSetIdStr);
     // console.log(questionSetId);
    }
    //get the questionset information
    const myObserver1 = {
      next: (response: any) => {this.questions= response;
     console.log(response);


     for (let i = 0; i < this.questions.length; i++) {
       if(questionSetId == this.questions[i].id ){
        this.question = category[(this.questions[i].categoryId - 9)];
        this.difficulty =  difficulty[(this.questions[i].difficultyId - 1)]
        this.numbQuest = (this.questions[i].numQuestions).toString();
        this.catId = (this.questions[i].categoryId).toString();

       }
      }
    },
      error: (error: Error) => console.log(error)
    };
    this.qSetServ.getAllQuestionSets().subscribe(myObserver1);



    //get the question pool
    const myObserver = {
      next: (response: QuestionPool[]) => {
       this.questionpool= response;

      console.log(response);
      console.log(this.questionpool.length)



      this.poolQuestion = new Array<string>(this.questionpool.length);
      for(let j = 0; j < this.questionpool.length; j++){
        this.poolQuestion[j] = this.questionpool[j].triviaQuestion;
        console.log(this.poolQuestion[j]);


      }



    },
    error: (error: Error) => console.log(error)
  };
  console.log(this.difficulty)
  this.qpServ.getQuestionPool(this.numbQuest,this.catId,this.difficulty).subscribe(myObserver);



}

goBack():void{
  this.location.back();
}

}
