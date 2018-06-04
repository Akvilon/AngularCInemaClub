import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsListComponent } from '../../components/films-list/films-list.component';
import { MaterialModule } from '../material.module';
import { MainComponent } from '../../components/main/main.component';
import { FilmsItemComponent } from '../../components/films-list/films-item/films-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    FilmsListComponent,
    MainComponent,
    FilmsItemComponent
  ],
  exports:[
    FilmsListComponent,
    FilmsItemComponent
  ]
})
export class FilmCatalogModule { }
