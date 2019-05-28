import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Logging } from "./logging";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: "root"
})
export class LoggingService {

    constructor(
        private http: HttpClient 
    ){ }

    public sendToServer(log: Logging): Observable<any> {
        return this.http.post(environment.LOGGING_API, log, {responseType: 'text'});
    }

}