import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from '../components/films/films.component';
import { MainComponent } from '../components/main/main.component';



const routes: Routes = [

  { path: '',redirectTo: 'main',pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  { path: 'films', component: FilmsComponent },

  


  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
