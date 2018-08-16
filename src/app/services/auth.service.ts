import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'https://reqres.in/api';

  get isAuth() {
    return !!localStorage.getItem('auth_token');
  }

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/login`, { username, password })
      .pipe(
        retry(2),
        tap(res => {
          if (res.token) {
            localStorage.setItem('auth_token', res.token);
          } else {
            console.log('error');
          }
        }),
    );
  }

  logout() {
    return localStorage.removeItem('auth_token');
  }










  //////////////
  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.authUrl}/register`, { username, password })
      .pipe(
        retry(2),
        tap(res => {
          if (res.token) {
            localStorage.setItem('auth_token', res.token);
          } else {
            console.log('error');
          }
        }),
    );
  }
  ///////////////

}
