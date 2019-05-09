import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HotTableModule } from '@handsontable/angular';

import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from '../home/home.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HotTableModule.forRoot(),
    ReactiveFormsModule,
    SharedModule,
    HomeModule
  ],
  declarations: [
    ProductsComponent,
    ProductFormComponent
  ]
})
export class ProductsModule { }
