import { NgModule } from "@angular/core";
import { MessageCardsModule } from "./messages/message.cards.module";
import { CommonModule } from "@angular/common";
import { GetEnumerationValues } from "./get.enumeration.values";
import { KeysPipe } from "./keys.pipe";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "./request.interceptor";

@NgModule({
    imports: [
        CommonModule,
        MessageCardsModule
    ],
    declarations:[
        GetEnumerationValues,
        KeysPipe
    ],
    exports:[
        MessageCardsModule,
        GetEnumerationValues,
        KeysPipe
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }
    ]
})
export class SharedModule {}