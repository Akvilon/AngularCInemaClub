import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../../../services/actors.service';

@Component({
  selector: 'app-actors-item',
  templateUrl: './actors-item.component.html',
  styleUrls: ['./actors-item.component.scss']
})
export class ActorsItemComponent implements OnInit {

  private fullActorsData;
  actors = [];

  constructor(private actorsService: ActorsService) { }



  ngOnInit() {

    setTimeout(()=>{
      this.actorsService.getPopularActors().subscribe(
        (actorsList: any) => {
          this.fullActorsData = actorsList;
          this.actors = actorsList.results;
          console.log(this.fullActorsData);
          // console.log(`${this.filmService.midImgPath}${filmList.results[2].poster_path}`)
        },
        err => {
          console.log("error");
        })
    },1000);
   
  }

}
