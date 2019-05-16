import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { UsefulConstants } from "src/app/shared/useful.constants";
import { tap, map } from 'rxjs/operators';
import { TokenService } from "src/app/shared/token.service";
import { GoogleLoginProvider, AuthService } from "angular5-social-login";

@Injectable({
    providedIn: "root"
})
export class AuthenticationService {
    
    constructor(
        private http: HttpClient,
        private tokenService: TokenService,
        private socialAuth: AuthService
    ) {}

    public login(name: string, password: string): Observable<any> {
        return this
            .http
            .post(UsefulConstants.LOGIN_API, { name, password }, { observe: 'response' })
            .pipe(tap(response => {
                let token: string = response.body.token;
                this.tokenService.storeToken(token);
            }));
    }

    public checkNameIsTaken(name: string): Observable<boolean> {
        return this
            .http
            .get<boolean>(UsefulConstants.LOGIN_API + '/exists/' + name);
    }

    public doGoogleLogin(): void {
        let socialMedia = GoogleLoginProvider.PROVIDER_ID;
        this.socialAuth.signIn(socialMedia)
            .then((user) => {
                console.log('GoogleLoginProvider');
                console.log(user.idToken);
                this.http.post(UsefulConstants.LOGIN_API + '/google', user.idToken)
                    .subscribe((userName) => {
                        console.log('handleGoogleToken');
                        console.log(userName);
                    })
            });
    }

}