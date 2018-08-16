import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Film } from '../models/film.model';
import { HttpClient } from '@angular/common/http';
import { CONFIG, Config } from '../config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(@Inject(CONFIG) public config: Config,
    private http: HttpClient
  ) { }

  ////// Films
  getPopularFilms(page?: number) {
    return this.http.get(`${this.config.movieUrl}/popular?page=${page}${this.config.params}`);
  }

  getMovieExternalId(id) {
    return this.http.get(`${this.config.movieUrl}/${id}/external_ids?api_key=${this.config.apiKey}`).pipe(map((val: any) => val.imdb_id));
  }

  getSimilarMovies(id) {
    return this.http.get(`${this.config.movieUrl}/${id}/similar?api_key=${this.config.apiKey}&language=ru-RU&page=1`);
  }

  getFilmSearch(query: string, page?: number) {
    return this.http.get(`${this.config.searchUrl}/movie?${this.config.searchParams}${query}&page=${page}${this.config.adult}`);
  }

  /////// Actors
  getPopularActors(page?: number) {
    return this.http.get(`${this.config.personUrl}/popular?page=${page}${this.config.params}`);
  }

  getActorExternalId(id) {
    return this.http.get(`${this.config.personUrl}/${id}/external_ids?api_key=${this.config.apiKey}`).pipe(map((val: any) => val.imdb_id));
  }

  getActorsSearch(query: string, page?: number) {
    return this.http.get(`${this.config.searchUrl}/person?${this.config.searchParams}${query}&page=${page}${this.config.adult}`);
  }


  ////// Posters
  getPosters(value: string) {
    return `${this.config.midImgPath}${value}`;
  }

  getSmallPosters(value: string) {
    return `${this.config.smallImgPath}${value}`;
  }


  getById(id) {
    return this.http.get(`${this.config.apiUrl}/find/${id}?api_key=${this.config.apiKey}&language=ru-RU&external_source=imdb_id`);
  }




  // getFilmsByName(value : string) {
  //   return this.films.filter((el : Film) => el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  // }

}
