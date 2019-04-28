import { NgModule } from "@angular/core";
import { ErrorMessageComponent } from "./messages/error.message.component";
import { MessageCardsModule } from "./messages/message.cards.module";
import { PlatformRuntimeDetectorService } from "./platform.runtime.detector.service";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        CommonModule,
        MessageCardsModule
    ],
    declarations:[

    ],
    exports:[
        MessageCardsModule
    ]
})
export class SharedModule {}