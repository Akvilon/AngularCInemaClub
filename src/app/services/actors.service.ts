import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActorsService {
  apiUrl: string = "https://api.themoviedb.org/3"
  apiKey: string = '0994e7679a856150aadcecf7de489bce'
  movieUrl: string = `${this.apiUrl}/movie`
  searchUrl: string = `${this.apiUrl}/search`
  personUrl: string = `${this.apiUrl}/person`
  params: string = `&api_key=${this.apiKey}&language=ru-RU`

  imgPath: string = 'https://image.tmdb.org/t/p'
  midImgPath: string = `${this.imgPath}/w500`
  smallImgPath: string = `${this.imgPath}/w185`
  bigBackPath: string = `${this.imgPath}/w1280`
  midBackPath: string = `${this.imgPath}/w780`
  smallBackPath: string = `${this.imgPath}/w300`
  
  constructor( 
    private http: HttpClient
  ) {}

  getPopularActors (page?: number) {
    return this.http.get(`${this.personUrl}/popular?page=${page}${this.params}`)
  }

  // getFilm():Film[] {
  //   return this.films;
  // }

  // getFilmsByName(value : string) {
  //   return this.films.filter((el : Film) => el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  // }
  
}
