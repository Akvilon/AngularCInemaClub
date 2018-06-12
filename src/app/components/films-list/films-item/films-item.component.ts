import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Film } from '../../../models/film.model';

@Component({
  selector: 'films-item',
  templateUrl: './films-item.component.html',
  styleUrls: ['./films-item.component.scss']
})
export class FilmsItemComponent implements OnInit {

  @Input() film: Film;
  
  @Output() clickedItem = new EventEmitter<boolean>();

  isSelected:boolean;

  constructor() { }

  sendClickedItem() {
    this.isSelected = !this.isSelected;
    this.film.favorite = this.isSelected;
    this.clickedItem.emit(this.film.favorite);
    console.log(this.clickedItem);
  }

  // addToFavorites() {
  //   this.isSelected = !this.isSelected;
  //   this.favorites.emit(this.isSelected);

  //   console.log(this.isSelected);
  // }

  ngOnInit() {
  
  }

}
