import { NgModule, ErrorHandler } from "@angular/core";
import { MessageCardsModule } from "./messages/message.cards.module";
import { CommonModule } from "@angular/common";
import { GetEnumerationValues } from "./get.enumeration.values";
import { KeysPipe } from "./keys.pipe";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "./request.interceptor";
import { GlobalErrorHandler } from "./global.error.handler";
import { ErrorInterceptor } from "./error.interceptor";
import { ProgressLoaderService } from "./progress.loader.service";
import { LoaderComponent } from "./loader.component";
import { NotificationComponent } from "./notification.component";

@NgModule({
    imports: [
        CommonModule,
        MessageCardsModule
    ],
    declarations:[
        GetEnumerationValues,
        KeysPipe,
        LoaderComponent,
        NotificationComponent
    ],
    exports:[
        MessageCardsModule,
        GetEnumerationValues,
        KeysPipe,
        LoaderComponent,
        NotificationComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        },        
        {
            provide: ErrorHandler,
            useClass: GlobalErrorHandler
        },
        ProgressLoaderService
    ]
})
export class SharedModule {}