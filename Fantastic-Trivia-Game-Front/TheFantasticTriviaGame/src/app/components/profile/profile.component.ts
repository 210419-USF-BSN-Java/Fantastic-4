import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  totalScore: string ='1';
  edit:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
