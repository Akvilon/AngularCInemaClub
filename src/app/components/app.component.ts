import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links: object[] = [
    { path: '/main', label: 'Главная', active: 'active', icon: 'fa-home' },
    { path: '/films', label: 'Фильмы', active: 'active', icon: 'fa-film' },
    { path: '/actors', label: 'Актеры', active: 'active', icon: 'fa-users' },
  ];

  constructor(public authService: AuthService,
    private router: Router) {

  }

  exit() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
