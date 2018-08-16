import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from '../../components/films/films.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { FilmCardComponent } from '../../components/films/film-card/film-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: [
    FilmsComponent,
    FilmCardComponent
  ]
})
export class FilmsModule { }
