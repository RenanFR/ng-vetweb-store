import { TokenService } from "./shared/token.service";
import { OnInit } from "@angular/core";

export class Session implements OnInit{
    
    bodyClass: string = 'bg-dark';

    constructor(
        // private tokenService: TokenService 
    ){}
        
    ngOnInit(): void {
        // if (this.tokenService.isTokenSet()) {
        //     this.bodyClass = '';
        // } else {
        //     this.bodyClass = 'bg-dark';
        // }
    }

}