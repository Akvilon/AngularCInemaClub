import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from '../../components/films/films.component';
import { MaterialModule } from '../material.module';
import { MainComponent } from '../../components/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    FilmsComponent,
    MainComponent
  ]
})
export class FilmCatalogModule { }
