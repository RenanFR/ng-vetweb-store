import { Injectable } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { HttpSentEvent } from "@angular/common/http";
import { HttpHeaderResponse } from "@angular/common/http";
import { HttpProgressEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpUserEvent } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { TokenService } from "./token.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        private tokenService: TokenService
    ){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpSentEvent |
        HttpHeaderResponse | 
        HttpProgressEvent |
        HttpResponse<any> |
        HttpUserEvent<any>> {
            return next
                .handle(req)
                .pipe(catchError((err) => {
                    if (err.status === 403) {
                        console.log('Token provided is expired');
                        this.tokenService.removeToken();
                    }
                    return throwError(err);
                }));
    }

}