import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from '../../components/authorization/authorization.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../../components/authorization/login/login.component';
import { RegistrationComponent } from '../../components/authorization/registration/registration.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    AuthorizationComponent,
    LoginComponent,
    RegistrationComponent
  ]
})
export class AuthorizationModule { }
