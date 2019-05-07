import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { UserInfo } from './user.info';
import { PlatformRuntimeDetectorService } from 'src/app/shared/platform.runtime.detector.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  bodyClass: boolean = true;
  authForm: FormGroup;
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;

  constructor(
    private authFormBuilder: FormBuilder,
    private authService: AuthenticationService,
    private platformDetector: PlatformRuntimeDetectorService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  public login(): void {
    let user: UserInfo = this.authForm.getRawValue() as UserInfo;
    this.authService
      .login(user.name, user.password)
      .subscribe(
        () => {
            this.router.navigate(['products']);
        },
        error => {
            console.log(error.status);
            if (this.platformDetector.checkIfItRunningOnBrowser()) {
                this.nameInput.nativeElement.focus();
            }
        }
      );
  }

  ngOnInit() {
    this.authForm = this.authFormBuilder.group({
        name:['', Validators.required],
        password:['', Validators.required]
    });
  }

}
