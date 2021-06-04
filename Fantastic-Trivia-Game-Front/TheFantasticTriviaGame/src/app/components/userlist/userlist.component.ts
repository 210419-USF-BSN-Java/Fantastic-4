import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
   userList:User[] = [
    {id:1,username:"1",password:"11",email:"1"},
    {id:2,username:"11",password:"12",email:"21"},
    {id:3,username:"22",password:"11",email:"31"},
    {id:4,username:"121",password:"21",email:"41"},
    {id:5,username:"121",password:"11",email:"51"}
  ]

  constructor(private uServ:UserService) { }

  ngOnInit(): void {
  }

  deleteUser(userId:number):void{
    this.uServ.deleteUser(userId).subscribe();
    this.userList.shift();
  }

}
