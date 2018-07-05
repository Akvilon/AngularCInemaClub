import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  value:string ='';

  constructor() { }

  // searchFilms(value:string){
  //   return this.films.filter((el : Film) => el.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  // }

  ngOnInit() {
  }

}
