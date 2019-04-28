import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import { UserInfo } from './user.info';
import { PlatformRuntimeDetectorService } from 'src/app/shared/platform.runtime.detector.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;

  constructor(
    private authFormBuilder: FormBuilder,
    private authService: AuthenticationService,
    private platformDetector: PlatformRuntimeDetectorService,
    private router: Router
  ) { }

  public login(): void {
    let user: UserInfo = this.authForm.getRawValue() as UserInfo;
    this.authService
      .login(user.name, user.password)
      .subscribe(
        (response) => {
            console.log(response.token);
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
