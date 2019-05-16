import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthenticationBaseComponent } from '../auth.base.component';
import { RouterModule } from '@angular/router';
import { EnableToLogin } from './enable.to.login';
import { UserExistsValidator } from './user.exists.validator';
import { SocialLoginModule, AuthServiceConfig } from 'angular5-social-login';
import { getGoogleClientCredentials } from './google.configuration';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    SocialLoginModule
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
    UserExistsValidator,
    {
      provide: AuthServiceConfig,
      useFactory: getGoogleClientCredentials
    }
  ]
})
export class LoginModule { }
