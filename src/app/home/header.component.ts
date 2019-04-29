import { Injectable, Component, Input } from "@angular/core";
import { TokenService } from "../shared/token.service";
import { Observable } from "rxjs";
import { UserInfo } from "./login/user.info";
import { UserToken } from "./user.token";

@Component({
    selector: 'vetweb-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Input() title: string = '';

    userInfo$: Observable<UserToken>;

    constructor(
        private tokenService: TokenService
    ){
        this.userInfo$ = tokenService.getUser();
    }

}