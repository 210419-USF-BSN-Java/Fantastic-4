import { Component, OnInit } from '@angular/core';
import { QuestionSet, category, difficulty } from 'src/app/models/questionSet';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  message: string = "";
  categoryArray: Categories[] = new Array(0);

  constructor() { }

  ngOnInit(): void {
    let categoryId = 9;


    for (let element in category) {

      if (isNaN(Number(element))) {
        let indiviualCategory: Categories = { id: categoryId, name: element.replace("_", " ") };
        this.categoryArray.push(indiviualCategory);
        categoryId++;
      }
    }
    console.log(this.categoryArray);
  }

  createNewCategory(categoryIdStr: string, difficultyIdStr: string, numQuesStr: string): void {
    if (parseInt(categoryIdStr) == 0) {
      this.message = "Please select category";
    } else if (parseInt(difficultyIdStr) == 0) {
      this.message = "Please select difficulty";

    } else if (parseInt(numQuesStr) < 5 || parseInt(numQuesStr) > 25|| Number.isNaN(parseInt(numQuesStr))){
      this.message = "Please enter valid number of questions";
    }else{
      this.message =parseInt(numQuesStr)+"it works";
    }
  }

}

interface Categories {
  id: number;
  name: string;
}
