import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthenticationService {

    private api = 'http://localhost:8080/vetweb/store/api/login';
    
    constructor(
        private http: HttpClient
    ) {}

    public login(name: string, password: string): Observable<any> {
        return this.http.post(this.api, {name, password});
    }

}