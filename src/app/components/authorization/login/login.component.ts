import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    private fb: FormBuilder) {

    this.form = this.fb.group({
      user: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        Validators.minLength(5),
        Validators.maxLength(25)
      ]],

      pass: ['', [
        Validators.required,
        Validators.pattern('^(?!.* )(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{0,}'),
        Validators.minLength(5),
        Validators.maxLength(25),
      ]]
    });
  }


  login() {
    if (this.form.valid) {

      this.authService.login(this.form.controls['user'].value, this.form.controls['pass'].value)
        .subscribe(
          () => {
            this.form.reset();
            this.router.navigate(['/main']);
          },
          err => {
            console.log('error');
          }
        );
    }
  }


  ngOnInit() {
    if (this.authService.isAuth) this.router.navigate(['/main']);
  }

}
