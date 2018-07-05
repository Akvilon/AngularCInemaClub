import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsListComponent } from '../../components/films-list/films-list.component';
import { MaterialModule } from '../material.module';
import { MainComponent } from '../../components/main/main.component';
import { FilmsItemComponent } from '../../components/films-list/films-item/films-item.component';
import { FormsModule } from '@angular/forms';
import { ActorsItemComponent } from '../../components/films-list/actors-item/actors-item.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    FilmsListComponent,
    MainComponent,
    FilmsItemComponent,
    ActorsItemComponent

  ],
  exports:[
    FilmsListComponent,
    FilmsItemComponent
  ]
})
export class FilmCatalogModule { }
