import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogOutComponent } from './log-out/log-out.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    LogOutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
