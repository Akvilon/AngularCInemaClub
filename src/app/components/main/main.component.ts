import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  films = [];
  actors = [];

  constructor(public apiService: ApiService) { }


  loadFilms() {
    this.apiService.getPopularFilms().subscribe(
      (filmsList: any) => {
        let res = filmsList.results;
        this.films = res.splice(0, 5);
      },
      err => {
        console.log("error");
      })
  }

  loadActors() {
    this.apiService.getPopularActors().subscribe(
      (actorsList: any) => {
        let res = actorsList.results;
        this.actors = res.splice(0, 5);
        console.log(this.actors);
      },
      err => {
        console.log("error");
      })
  }

  ngOnInit() {
    this.loadFilms();
    this.loadActors();
  }

}
