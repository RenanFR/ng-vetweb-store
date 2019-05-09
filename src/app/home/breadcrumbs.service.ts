import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class BreadcrumbsService {

    breadcrumbs: Map<string, string> = new Map([ ['default', 'breadcrumb'] ]);

    public breadcrumbSubject = new BehaviorSubject<Map<string, string>>(this.breadcrumbs);

}