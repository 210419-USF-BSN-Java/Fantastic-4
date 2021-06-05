import { Component, OnInit } from '@angular/core';
import { QuestionSet, category, difficulty } from 'src/app/models/questionSet';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css']
})
export class SelectCategoryComponent implements OnInit {
  nameGame: string = "helooe";
  id: number = 1;

 


  questions: QuestionSet[] = [{ id: 1, categoryId: 1, numQuestions: 5, difficultyId: 1 },
  { id:2, categoryId: 3, numQuestions: 5, difficultyId: 1 },
  { id: 3, categoryId: 2, numQuestions: 5, difficultyId: 1 }, 
  { id: 4, categoryId: 1, numQuestions: 5, difficultyId: 1 }]

  categoryNames:string[]=[];
  difficultyNames:string[]=[];
  constructor() {
    
   }

  ngOnInit(): void {
    this.categoryNames = new Array<string>(this.questions.length);
    for(let i = 0; i<this.categoryNames.length; i++){
      this.categoryNames[i] = category[this.questions[i].categoryId];
    }

    this.difficultyNames = new Array<string>(this.questions.length);
    for(let i = 0; i<this.difficultyNames.length; i++){
      this.difficultyNames[i] = category[this.questions[i].difficultyId];
    }

 
  //console.log(category[1]);
  }

  

  deleteCategory(id: number): void {
    console.log("question set deleted: " +id);

  }

}
