import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Adding Components
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {UsersComponent} from './users/users.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

import { from } from 'rxjs';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/users'},
  {path: 'login' , component: LoginComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'profile' , component: ProfileComponent},
  {path: 'users' , component: UsersComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
