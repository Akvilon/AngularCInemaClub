import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsListComponent } from '../components/films-list/films-list.component';
import { MainComponent } from '../components/main/main.component';
import { ActorsItemComponent } from '../components/films-list/actors-item/actors-item.component';
import { FilmsItemComponent } from '../components/films-list/films-item/films-item.component';



const routes: Routes = [

  { path: '',redirectTo: 'main',pathMatch: 'full'},
  { path: 'main', component: MainComponent },
  { path: 'films-list', component: FilmsListComponent, 
    children: [
      { path: 'films', component: FilmsItemComponent },
      { path: 'actors', component: ActorsItemComponent },
    ]
  },
  


  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
