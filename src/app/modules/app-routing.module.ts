import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsListComponent } from '../components/films-list/films-list.component';
import { MainComponent } from '../components/main/main.component';



const routes: Routes = [

  { path: '',redirectTo: 'main',pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  { path: 'films', component: FilmsListComponent },
  


  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
