import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films = [];
  

  constructor(private filmService: FilmService) { 
   
  }

  ngOnInit() {
    this.films = this.filmService.getFilm();
  }

}
