import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/questionSet';
import { QuestionSetService } from 'src/app/services/question-set.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  message: string = "";
  categoryArray: Categories[] = new Array(0);

  constructor(private qsServ:QuestionSetService) { }

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


      const myObserver = {
        next: (response: any) => {
        //console.log(response) ;
        this.message = "Category added successfully";}   
     ,
        error: (error: Error) => console.log(error)
      };
      
      this.qsServ.addGame(categoryIdStr, difficultyIdStr, numQuesStr).subscribe( myObserver);
      
    }
  }

}

interface Categories {
  id: number;
  name: string;
}
