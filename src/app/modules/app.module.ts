import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppComponent } from '../components/app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { GlobalSearchComponent } from '../components/global-search/global-search.component';
import { CONFIG, Config } from '../config';
import { FilmsModule } from './films/films.module';
import { MainComponent } from '../components/main/main.component';
import { ActorsModule } from './actors/actors.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { NotFoundComponent } from '../components/not-found/not-found.component';


export function initConfig() {
  let apiUrl: string = "https://api.themoviedb.org/3";
  let apiKey: string = '0994e7679a856150aadcecf7de489bce';
  let imgPath: string = 'https://image.tmdb.org/t/p';
  return {
    apiUrl: "https://api.themoviedb.org/3",
    apiKey: '0994e7679a856150aadcecf7de489bce',
    searchUrl: `${apiUrl}/search`,
    movieUrl: `${apiUrl}/movie`,
    adult: '&include_adult=false',

    personUrl: `${apiUrl}/person`,
    params: `&api_key=${apiKey}&language=ru-RU`,
    searchParams: `&api_key=${apiKey}&language=ru-RU&query=`,
    imgPath: 'https://image.tmdb.org/t/p',
    midImgPath: `${imgPath}/w500`,
    smallImgPath: `${imgPath}/w185`,
    bigBackPath: `${imgPath}/w1280`,
    midBackPath: `${imgPath}/w780`,
    smallBackPath: `${imgPath}/w300`
  } as Config;
}



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GlobalSearchComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    FilmsModule,
    ActorsModule,
    AuthorizationModule,
    SharedModule,

  ],
  providers: [
    {
      provide: CONFIG, useFactory: (initConfig)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
