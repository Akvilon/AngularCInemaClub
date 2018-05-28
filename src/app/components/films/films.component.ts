import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  сolspan:number = 1;
  rowspan:number = 1;

  films = [];
  

  constructor(private filmService: FilmService) { 
   
    this.films = filmService.films;
  }

  ngOnInit() {
    
  }

}
