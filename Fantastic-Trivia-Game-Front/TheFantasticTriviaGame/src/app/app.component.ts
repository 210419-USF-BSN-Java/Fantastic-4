import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheFantasticTriviaGame';
 token?: number[];
 url = this.router.url;

  constructor(private authServ: AuthService , private router:Router) { }


  logout(): void {
    //console.log(this.user);
  }

  ngOnInit():void{
    this.token = this.authServ.parseToken();    
  }
  ngDoCheck(): void {
   this.url = this.router.url;
    this.token = this.authServ.parseToken(); 
    
  }
}
