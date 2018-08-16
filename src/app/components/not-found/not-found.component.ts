import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {



  constructor(public auth: AuthService,
    private router: Router) { }



  ngOnInit() {

    setTimeout(() => {
      if (this.auth.isAuth) {
        this.router.navigate(['/main']);
      } else {
        this.router.navigate(['/auth/login']);
      }
    }, 5000);


  }

}
