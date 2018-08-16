import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsComponent } from '../../components/actors/actors.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { ActorCardComponent } from '../../components/actors/actor-card/actor-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    ActorsComponent,
    ActorCardComponent
  ]
})
export class ActorsModule { }
