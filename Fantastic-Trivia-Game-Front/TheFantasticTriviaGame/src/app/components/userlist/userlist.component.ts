import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userList: User[] = [];
  rowColor: string = 'bg-light';
  currentUser: number = 0;
  constructor(private uServ: UserService, private auth: AuthService) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  // ngDoCheck():void{
  //   this.loadUsers();
  // }
  permitUser(userId: number): void {
    const myObserver = {
      next: (response: any) => { console.log(response); this.loadUsers(); },
      error: (error: Error) => console.error(error)
    };
    this.uServ.permitUser(userId).subscribe(myObserver);
  }
  banUser(userId: number): void {
    const myObserver = {
      next: (response: any) => { console.log(response); this.loadUsers(); },
      error: (error: Error) => console.error(error)
    };
    this.uServ.banUser(userId).subscribe(myObserver);
  }

  deleteUser(userId: number): void {
    const myObserver = {
      next: (response: any) => { console.log(response); this.loadUsers(); },
      error: (error: Error) => console.error(error)
    };
    this.uServ.deleteUser(userId).subscribe(myObserver);
    //this.userList.shift();
  }

  loadUsers(): void {
    const myObserver = {
      next: (response: any) => {
        this.userList = response;
        this.currentUser = this.auth.parseToken()[0];

        this.userList = this.userList.sort((n1,n2) => {
          if (n1.id > n2.id) {
              return 1;
          }      
          if (n1.id < n2.id) {
              return -1;
          }      
          return 0;
      });
      },
      error: (error: Error) => console.error(error)
    };

    this.uServ.getAllUsers().subscribe(myObserver);

  }


}
