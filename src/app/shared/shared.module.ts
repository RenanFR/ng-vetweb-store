import { NgModule } from "@angular/core";
import { MessageCardsModule } from "./messages/message.cards.module";
import { CommonModule } from "@angular/common";
import { GetEnumerationValues } from "./get.enumeration.values";
import { KeysPipe } from "./keys.pipe";

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
    ]
})
export class SharedModule {}