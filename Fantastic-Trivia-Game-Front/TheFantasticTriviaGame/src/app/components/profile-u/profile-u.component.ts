import { AfterContentInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-u',
  templateUrl: './profile-u.component.html',
  styleUrls: ['./profile-u.component.css']
})
export class ProfileUComponent implements AfterContentInit {
  
  @Input()
  userId:number =0;
  
  totalScore: string = '1';
  edit: boolean = false;
  //userId?:number;
  user:User = {id:1,username:'1', password:'pass',email:'10'};
  user1:User= {id:1,username:'1', password:'pass',email:'12'};

  constructor(private userServ: UserService) { }

  ngAfterContentInit(): void {
    console.log("hello");
    const myObserver = {
      next: (response: User) => {this.user = response; console.log('observer got' + response);},
      error: (error: Error) => console.error(error),
    };
    this.userServ.getUser(this.userId).subscribe(myObserver);
  }
  editUser(): void {
    this.edit = true;
  }
  dontEdit(): void {
    this.edit = false;
  }

}
