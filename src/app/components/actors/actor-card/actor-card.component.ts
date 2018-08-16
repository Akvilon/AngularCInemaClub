import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent implements OnInit {

  actorId: number;
  isLoading: boolean = false;

  actorCard = [];
  knownFilm = [];


  constructor(public apiService: ApiService,
    private route: ActivatedRoute) { }


  findActor() {
    this.isLoading = true;
    this.apiService.getActorExternalId(this.actorId).subscribe(
      (external: any) => {
        let ext = external;
        this.apiService.getById(ext).subscribe(
          (result: any) => {
            this.actorCard = result.person_results;
            this.isLoading = false;
            console.log(this.actorCard);
          },
          err => {
            console.log('error');
          }
        )
      },
      err => {
        console.log('error');
      }
    )
  }


  ngOnInit() {
    this.actorId = this.route.snapshot.params['id'];

    this.findActor();
  }

}
