import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthenticationBaseComponent } from '../auth.base.component';
import { RouterModule } from '@angular/router';
import { EnableToLogin } from './enable.to.login';
import { UserExistsValidator } from './user.exists.validator';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    AuthenticationBaseComponent
  ],
  exports: [
    LoginComponent,
    AuthenticationBaseComponent
  ],
  providers: [
    EnableToLogin,
    UserExistsValidator
  ]
})
export class LoginModule { }
