import { QuestionPoolService } from './../../services/question-pool.service';
import { QuestionPool } from './../../models/questionPool';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  // question:string='';
  // difficulty:string ='';
  // topic:string='';


  questionpool: QuestionPool[] = [];

  constructor(private qpServ:QuestionPoolService) { }

  ngOnInit(): void {
    let id:number = 1;
    const myObserver = {
      next: (response: any) => {
        this.questionpool= response;
      console.log(response)

    },
    error: (error: Error) => console.log(error)
  };
  this.qpServ.getQuestionPool(id).subscribe(myObserver);



}

}
