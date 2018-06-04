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

  count:number = 0;

 sorting = [
    {value: 'az', viewValue: 'от А до Я'},
    {value: 'za', viewValue: 'от Я до А'},
  ];


  constructor(private filmService: FilmService) { 
   
  }

  ngOnInit() {
    this.films = this.filmService.getFilm();
  }



  setFavoritesFilms(ev) {
    if(ev){
      this.count = this.count + 1;
    }else {
      this.count = this.count - 1;
    }
  }

  sortFilmsItems(event) {

    if(event.value == "az") {
      this.films.sort(function( a:Film, b:Film ){
        if(a.name < b.name) {
          return -1;
        }else if(a.name > b.name){
          return 1;
        }else {
          return 0;
        }
      });
    }else if(event.value == "za") {
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
  }

  






}

// this.films.sort( function(name1, name2) {
    //   if ( name1.name < name2.name ){
    //     return -1;
    //   }else if( name1.name > name2.name ){
    //     return 1;
    //   }else{
    //     return 0;	
    //   }
    // });


  //   else {
  //     this.films.sort( function(name1, name2) {
  //       if ( name1.name > name2.name ){
  //         return 1;
  //       }
  // });
  //   }