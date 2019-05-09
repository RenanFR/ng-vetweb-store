import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class BreadcrumbsService {

    breadcrumbs: string[] = ['a', 'b', 'c'];

    private breadcrumbSubject = new BehaviorSubject<string[]>(this.breadcrumbs);

}