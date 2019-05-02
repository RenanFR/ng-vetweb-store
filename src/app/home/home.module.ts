import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header.component";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        LayoutComponent
    ],
    exports: [
        HeaderComponent,
        LayoutComponent
    ]
})
export class HomeModule {

}