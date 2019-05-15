import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { BreadcrumbComponent } from "./breadcrumb.component";
import { LogoutModalComponent } from "./logout.modal.component";
import { SidebarComponent } from "./sidebar.component";
import { NavbarComponent } from "./navbar.component";
import { FooterComponent } from "./footer.component";
import { ScrollComponent } from "./scroll.component";
import { BreadcrumbsService } from "./breadcrumbs.service";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ],
    declarations: [
        BreadcrumbComponent,
        LogoutModalComponent,
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
        ScrollComponent,
        LayoutComponent
    ],
    exports: [
        LayoutComponent
    ],
    providers: [
        BreadcrumbsService
    ]
})
export class HomeModule {

}