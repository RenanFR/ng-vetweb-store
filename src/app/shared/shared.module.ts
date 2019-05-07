import { NgModule } from "@angular/core";
import { MessageCardsModule } from "./messages/message.cards.module";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        MessageCardsModule,
    ],
    declarations:[
    ],
    exports:[
        MessageCardsModule
    ]
})
export class SharedModule {}