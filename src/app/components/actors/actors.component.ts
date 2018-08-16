import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  private fullActorsData;
  actors = [];

  isLoading: boolean = false;

  public page: number = 1;

  constructor(public apiService: ApiService,
    private router: Router) { }

  showMoreActors() {
    this.isLoading = true;
    setTimeout(() => {
      this.page++;
      console.log(this.page);
      this.apiService.getPopularActors(this.page).subscribe(
        (actorsList: any) => {
          let nextActors = actorsList.results;
          let currentActors = this.actors;

          this.actors = currentActors.concat(nextActors);
          this.isLoading = false;

          // console.log(`${this.filmService.midImgPath}${filmList.results[2].poster_path}`)
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
        this.apiService.getActorsSearch(ev, 1).subscribe(
          (searchResults: any) => {
            this.actors = searchResults.results;
            this.isLoading = false;
            window.scroll(0, 0);
          },
          err => {
            console.log("error");
          });
      }, 2000);
    } else {
      this.loadActors();
    }

  }

  loadActors() {
    this.isLoading = true;
    setTimeout(() => {
      this.apiService.getPopularActors().subscribe(
        (actorsList: any) => {

          this.actors = actorsList.results;
          console.log(this.actors);
          this.isLoading = false;
          // console.log(`${this.filmService.midImgPath}${filmList.results[2].poster_path}`)
        },
        err => {
          console.log("error");
        })
    }, 2000);
  }

  ngOnInit() {
    this.loadActors();

  }

}
