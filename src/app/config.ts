import { InjectionToken } from "@angular/core";


export class Config {
    apiUrl: string = "https://api.themoviedb.org/3"
    apiKey: string = '0994e7679a856150aadcecf7de489bce'
    searchUrl: string = `${this.apiUrl}/search`
    movieUrl: string = `${this.apiUrl}/movie`
    adult: string = '&include_adult=false'

    personUrl: string = `${this.apiUrl}/person`
    params: string = `&api_key=${this.apiKey}&language=ru-RU`
    searchParams: string = `&api_key=${this.apiKey}&language=ru-RU&query=`
    searchById: string = `api_key=${this.apiKey}&language=ru-RU&external_source=imdb_id`
    imgPath: string = 'https://image.tmdb.org/t/p'
    midImgPath: string = `${this.imgPath}/w500`
    smallImgPath: string = `${this.imgPath}/w185`
    bigBackPath: string = `${this.imgPath}/w1280`
    midBackPath: string = `${this.imgPath}/w780`
    smallBackPath: string = `${this.imgPath}/w300`
}

export const CONFIG = new InjectionToken<Config>('CONFIG');