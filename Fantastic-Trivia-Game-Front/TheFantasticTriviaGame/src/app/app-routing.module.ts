import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardUComponent } from './components/leaderboard-u/leaderboard-u.component';
import { LoginComponent } from './components/login/login.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SelectCategoryComponent } from './components/select-category/select-category.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserlistComponent } from './components/userlist/userlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'new-game', component: NewGameComponent },
  {path: 'select-category', component:SelectCategoryComponent},
  { path: 'leaderboard', component: LeaderboardUComponent },
  { path: 'profile', component: ProfileComponent },


  { path: 'new-category', component: NewCategoryComponent },
  { path: 'users', component: UserlistComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'questions/:id', component: QuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
