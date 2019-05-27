import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { LoadingType } from "./loading.type";

@Injectable()
export class ProgressLoaderService {

    private subjectLoader = new Subject<LoadingType>();

    public loading(): Observable<LoadingType> {
        return this.subjectLoader.asObservable();
    }

    public start(): void {
        this.subjectLoader.next(LoadingType.START);
    }

    public stop(): void {
        this.subjectLoader.next(LoadingType.STOP);
    }

}