import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnInit {

  searchString: string = '';

  searchingStack = [];

  constructor(private apiService: ApiService,
    private router: Router) { }



  sendString() {

    if (this.searchString !== '') {

      this.apiService.getFilmSearch(this.searchString, 1).subscribe(
        (searchingItems: any) => {
          this.searchingStack = searchingItems.results;


          this.router.navigate(['/films']);
        },
        error => {
          console.log('error');
        })
    } else if (this.searchString == '') {

    }
  }

  ngOnInit() {

  }

}
