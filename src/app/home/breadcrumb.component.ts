import { Component, OnInit } from "@angular/core";
import { BreadcrumbsService } from "./breadcrumbs.service";

@Component({
    selector: 'vetweb-breadcrumb',
    templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit{

    constructor(
        private breadcrumbsService: BreadcrumbsService
    ){}

    breadcrumbs: string[] = [];

    ngOnInit(): void {
        this.breadcrumbsService
        .breadcrumbSubject
        .asObservable()
        .subscribe(b => {
            this.breadcrumbs = b;
        });
    }

}