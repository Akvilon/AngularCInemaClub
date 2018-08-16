import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { ActorsComponent } from '../components/actors/actors.component';
import { FilmsComponent } from '../components/films/films.component';
import { AuthorizationComponent } from '../components/authorization/authorization.component';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../components/authorization/login/login.component';
import { RegistrationComponent } from '../components/authorization/registration/registration.component';
import { FilmCardComponent } from '../components/films/film-card/film-card.component';
import { ActorCardComponent } from '../components/actors/actor-card/actor-card.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';


const routes: Routes = [

  {
    path: '', redirectTo: '/auth/login', pathMatch: 'full'
  },

  {
    path: 'auth',
    component: AuthorizationComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  },

  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'films',
    component: FilmsComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'films/:id',
    component: FilmCardComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'actors',
    component: ActorsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'actors/:id',
    component: ActorCardComponent,
    canActivate: [AuthGuard]
  },



  { path: '**', component: NotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
