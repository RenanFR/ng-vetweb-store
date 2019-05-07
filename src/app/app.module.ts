import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { LoginModule } from './home/login/login.module';
import { AppRouterModule } from './app-router.module';
import { CategoryModule } from './category/category.module';
import { HomeModule } from './home/home.module';
import { LayoutComponent } from './home/layout.component';
import { APP_BASE_HREF } from '@angular/common';
import { Session } from './session';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CategoryModule,
    LoginModule,
    HomeModule,
    AppRouterModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: 'session', useValue: new Session() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
