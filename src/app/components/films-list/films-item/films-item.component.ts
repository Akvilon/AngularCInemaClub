import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Film } from '../../../models/film.model';
import { FilmService } from '../../../services/film.service';

@Component({
  selector: 'films-item',
  templateUrl: './films-item.component.html',
  styleUrls: ['./films-item.component.scss']
})
export class FilmsItemComponent implements OnInit {


  fullFilmsData = [];
  films = [];

  isLoading:boolean = false;

  public page: number = 1;
  
  // @Output() clickedItem = new EventEmitter<boolean>();

  // isSelected:boolean;


  constructor(private filmService: FilmService) { }

  // sendClickedItem() {
  //   this.isSelected = !this.isSelected;
  //   this.film.favorite = this.isSelected;
  //   this.clickedItem.emit(this.film.favorite);
  //   console.log(this.clickedItem);
  // }

  showMoreFilms(){
    this.isLoading = true;
    setTimeout(() => {
     this.page++;
     console.log(this.page);
      this.filmService.getPopularFilms(this.page).subscribe(
        (filmsList: any) => {
        
          let nextFilms = filmsList.results;
          let currentFilms = this.films;

          this.films = currentFilms.concat(nextFilms);
          this.isLoading = false;
          console.log(nextFilms);
          // console.log(`${this.filmService.midImgPath}${filmList.results[2].poster_path}`)
        },
        err => {
          console.log("error");
        })
    },2000);
  }

  

  ngOnInit() {
    // this.isSelected = this.film.favorite;
    setTimeout(() => {
      this.filmService.getPopularFilms().subscribe(
        (filmsList: any) => {
          this.fullFilmsData = filmsList;
          this.films = filmsList.results;
         
          console.log('', this.films);
          // console.log(`${this.filmService.midImgPath}${filmList.results[2].poster_path}`)
        },
        err => {
          console.log("error");
        })
    },2000);

  }

}
