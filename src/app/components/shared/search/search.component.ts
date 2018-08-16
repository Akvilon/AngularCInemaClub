import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchValue: string = '';

  @Output() sendString = new EventEmitter<string>();

  constructor() { }

  // searchFilms(value:string){
  //   return this.films.filter((el : Film) => el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  // }



  sendValue() {

    this.sendString.emit(this.searchValue);
  }

  ngOnInit() {

  }

}
