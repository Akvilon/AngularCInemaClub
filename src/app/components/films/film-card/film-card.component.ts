import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {

  filmId: number;
  externalId: number;

  similarMovies = [];
  filmCard = [];
  isLoading: boolean = false;

  constructor(public apiService: ApiService,
    private route: ActivatedRoute) { }


  findFilm() {
    this.isLoading = true;
    this.apiService.getMovieExternalId(this.filmId).subscribe(
      (external: any) => {
        this.externalId = external;
        this.apiService.getById(this.externalId).subscribe(
          (film: any) => {
            this.filmCard = film.movie_results;
            this.isLoading = false;
          },
          err => {
            console.log("error film");
          }
        )
      },
      err => {
        console.log("error ext");
      }
    )
  }

  findSimilar() {
    this.apiService.getSimilarMovies(this.filmId).subscribe(
      (similar: any) => {
        let sim = similar.results;
        this.similarMovies = sim.splice(0, 4);
        console.log(this.similarMovies);
      },
      err => {
        console.log("error film");
      }
    )
  }
  openSimilar(id) {
    this.filmId = id;
    this.findFilm();
    this.findSimilar();
  }

  ngOnInit() {
    this.filmId = this.route.snapshot.params['id'];

    this.findFilm();
    this.findSimilar();
  }

}


