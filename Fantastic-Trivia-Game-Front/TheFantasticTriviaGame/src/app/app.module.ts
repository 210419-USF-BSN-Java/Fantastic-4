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
import { HttpClientModule } from '@angular/common/http'

import { LeaderboardUComponent } from './components/leaderboard-u/leaderboard-u.component';
import { FormsModule } from '@angular/forms';
import { QuestionsComponent } from './components/questions/questions.component';
import { ProfileUComponent } from './components/profile-u/profile-u.component';
import { SelectCategoryComponent } from './components/select-category/select-category.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    NewGameComponent,
    NewCategoryComponent,
    UserlistComponent,
    LeaderboardUComponent,
    QuestionsComponent,
    ProfileUComponent,
    SelectCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
