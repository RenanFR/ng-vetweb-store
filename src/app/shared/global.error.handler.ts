import { Injectable, ErrorHandler, Injector } from "@angular/core";
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpSentEvent } from "@angular/common/http";
import { HttpHeaderResponse } from "@angular/common/http";
import { HttpProgressEvent } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { HttpUserEvent } from "@angular/common/http";
import * as Stacktrace from "stacktrace-js";
import { LocationStrategy, PathLocationStrategy } from "@angular/common";
import { LoggingService } from "./logging.service";
import { Logging } from "./logging";
import { TokenService } from "./token.service";
import { LogPrimaryKey } from "./log.primary.key";

@Injectable({
    providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {

    constructor(
        private injector: Injector
    ){ }
    
    handleError(error: any): void {
        const locationStrategy = this.injector.get(LocationStrategy);
        const logService = this.injector.get(LoggingService);
        const user = localStorage.getItem('user');
        const currentPath = locationStrategy instanceof PathLocationStrategy? locationStrategy.path() : '';
        const message = error.message ? error.message : error.toString();
        const nowTime = new Date().getTime();
        Stacktrace
            .fromError(error)
            .then((stack) => {
                const stackAsText = stack.map((frame) => frame.toString()).join('\n');
                const logPrimaryKey: LogPrimaryKey = {
                    'user': user,
                    'timeStamp': nowTime
                };
                const log: Logging = {
                    'logPrimaryKey': logPrimaryKey,
                    'path': currentPath,
                    'message': message,
                    'details': stackAsText
                };
                console.log(log);
                logService.sendToServer(log)
                    .subscribe((status) => {
                        console.log(status);
                    });
            })
        console.log('Global error handler enabled');
    }
}