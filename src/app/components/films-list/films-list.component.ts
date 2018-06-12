import { Component, OnInit, Output } from '@angular/core';
import { FilmService } from '../../services/film.service';
import { Film } from '../../models/film.model';


@Component({
  selector: 'films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
 
  
  films = [];
  isFavorites: boolean;
  count:number = 0;
  value;





 sorting = [
    {value: 'az', viewValue: 'от А до Я'},
    {value: 'za', viewValue: 'от Я до А'},
  ];


  constructor(private filmService: FilmService) {}


  

  setFavoritesFilmsNum(ev) {
    this.count += ev ? 1: -1; 
    
  }


  sortFilmsItems(event) {

    if(event.value == "az") {
     return this.sortAZ();
    }else if(event.value == "za") {
      return this.sortZA();
    }
  }

  sortAZ() {
    this.films.sort(function( a:Film, b:Film ){
      if(a.name < b.name) {
        return -1;
      }else if(a.name > b.name){
        return 1;
      }else {
        return 0;
      }
    });
  }

  sortZA() {
    this.films.sort(function( a:Film, b:Film ){
      if(a.name < b.name) {
        return 1;
      }else if(a.name > b.name){
        return -1;
      }else {
        return 0;
      }
    });
  }

  ngOnInit() {
    this.films = this.filmService.getFilm();
  
    let x = this.films.filter(el => el.favorite);
    console.log(x);
    this.count += x.length;

    console.log(this.value);
  }


}
