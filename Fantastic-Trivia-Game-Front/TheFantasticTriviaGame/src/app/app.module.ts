import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';

//remove in final
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { LeaderboardUComponent } from './components/leaderboard-u/leaderboard-u.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    NewGameComponent,
    NewCategoryComponent,
    UserlistComponent,
    LeaderboardUComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule




      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
   // HttpClientInMemoryWebApiModule.forRoot(
   //  InMemoryDataService, { dataEncapsulation: false }
  //  )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
