import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string = '';
  pass: string = '';

  constructor(private authService: AuthService,
    private router: Router) { }

  login() {
    this.authService.register(this.user, this.pass)
      .subscribe(
        () => {
          this.user = '';
          this.pass = '';
          this.router.navigate(['/main']);
        },
        err => {
          console.log('error');
        }
      );
  }


  ngOnInit() {
    if (this.authService.isAuth) this.router.navigate(['/main']);
  }

}
