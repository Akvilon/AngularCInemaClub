import { Component, OnInit, Input, Output } from '@angular/core';
import { Film } from '../../models/film.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  isShow: boolean;

  films = [];

  isLoading: boolean = false;

  public page: number = 1;



  constructor(public apiService: ApiService,
    private router: Router) { }



  showMoreFilms() {
    this.isLoading = true;
    setTimeout(() => {
      this.page++;
      console.log(this.page);
      this.apiService.getPopularFilms(this.page).subscribe(
        (filmsList: any) => {

          let nextFilms = filmsList.results;
          let currentFilms = this.films;

          this.films = currentFilms.concat(nextFilms);
          this.isLoading = false;
        },
        err => {
          console.log("error");
        })
    }, 2000);
  }

  loadFilms() {
    this.isLoading = true;
    setTimeout(() => {
      this.apiService.getPopularFilms().subscribe(
        (filmsList: any) => {

          this.films = filmsList.results;
          console.log(this.films);
          this.isLoading = false;
          window.scroll(0, 0);
        },
        err => {
          console.log("error");
        })
    }, 2000);
  }


  getStringValue(ev) {
    this.isLoading = true;
    if (ev !== '') {
      setTimeout(() => {
        this.apiService.getFilmSearch(ev, 1).subscribe(
          (searchResults: any) => {
            this.films = searchResults.results;

            this.isLoading = false;
            window.scroll(0, 0);
          },
          err => {
            console.log("error");
          });
      }, 2000);
    } else {
      this.loadFilms();
    }

  }



  ngOnInit() {
    this.loadFilms();

  }

}
