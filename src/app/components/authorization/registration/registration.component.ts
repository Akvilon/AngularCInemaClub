import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user: string = '';
  pass: string = '';

  constructor(private authService: AuthService) { }

  register() {

    this.authService.register(this.user, this.pass)
      .subscribe(
        () => {
          this.user = '';
          this.pass = '';
        },
        err => {
          console.log('error');
        }
      );
  }

  ngOnInit() {
    console.log(this.user);

  }


}
