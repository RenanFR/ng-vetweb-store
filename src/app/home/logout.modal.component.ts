import { Component } from "@angular/core";
import { TokenService } from "../shared/token.service";
import { Router } from "@angular/router";

@Component({
    selector: 'vetweb-logout-modal',
    templateUrl: './logout.modal.component.html'
})
export class LogoutModalComponent {

    constructor(
        private tokenService: TokenService
    ){ }

    public logout(): void {
        this.tokenService.removeToken();
        location.reload();
    }

}