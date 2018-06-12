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
  favorites;
  value:string ='';
  filmNames = [];
  message:string = '';

  filmsPerPage:number = 3;
  



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


  searchFilms() {
    if(this.value.length > 3 || this.value.length === 0) {
      this.films = this.filmService.getFilmsByName(this.value);
      this.message = '';
    }else {
      this.message = "Введите более 3-х букв";
    }
    
  }


  ngOnInit() {
    
    this.films = this.filmService.getFilm();
    
    console.log(this.films.length);

    this.favorites = this.films.filter(el => el.favorite);
    this.count += this.favorites.length;
    
  }


}
