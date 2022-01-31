import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegistrationRoutingModule } from './login-registration-routing.module';
import { LoginRegistrationComponent } from './login-registration.component';


@NgModule({
  declarations: [
    LoginRegistrationComponent
  ],
  imports: [
    CommonModule,
    LoginRegistrationRoutingModule
  ]
})
export class LoginRegistrationModule { }
