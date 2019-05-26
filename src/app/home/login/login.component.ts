import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { UserInfo } from './user.info';
import { PlatformRuntimeDetectorService } from 'src/app/shared/platform.runtime.detector.service';
import { TokenService } from 'src/app/shared/token.service';
import { UserExistsValidator } from './user.exists.validator';

@Component({
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  bodyClass: boolean = true;
  authForm: FormGroup;
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;

  constructor(
    private authFormBuilder: FormBuilder,
    private authService: AuthenticationService,
    private platformDetector: PlatformRuntimeDetectorService,
    private userExistsValidator: UserExistsValidator,
    private router: Router
  ) { }

  public login(): void {
    let user: UserInfo = this.authForm.getRawValue() as UserInfo;
    this.authService
      .login(user.name, user.password)
      .subscribe(
        () => {
            document.body.classList.remove('bg-dark');
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

  public doLoginWithGoogle(): void {
    this.authService.doLoginWithGoogle();
  }

  ngOnInit() {
    document.body.classList.add('bg-dark');
    this.authForm = this.authFormBuilder.group({
        name:['', [Validators.required], [this.userExistsValidator.checkNameIsTaken()]],
        password:['', Validators.required]
    });
  }

}
