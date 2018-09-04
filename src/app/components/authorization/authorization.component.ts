import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  isShow: boolean = false;

  constructor(private authService: AuthService) { }

  showTooltip() {
    this.isShow = true
    setTimeout(() => {
      this.isShow = false;
    }, 3000)
  }

  ngOnInit() {

  }

}
