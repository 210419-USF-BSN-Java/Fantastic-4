import { Component, OnInit } from '@angular/core';
import { QuestionSet } from 'src/app/models/questionSet';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  styleUrls: ['./select-category.component.css']
})
export class SelectCategoryComponent implements OnInit {
  nameGame: string = "helooe";
  id: number = 1;

 


  questions: QuestionSet[] = [{ id: 1, categoryId: 1, numQuestions: 5, difficultyId: 1 },
  { id:2, categoryId: 1, numQuestions: 5, difficultyId: 1 },
  { id: 3, categoryId: 1, numQuestions: 5, difficultyId: 1 }, 
  { id: 4, categoryId: 1, numQuestions: 5, difficultyId: 1 }]
  constructor() { }

  ngOnInit(): void {

    enum category{
      cat1,
      cat2
  }
  console.log(category[1]);
  }

  

  deleteCategory(id: number): void {

  }

}
