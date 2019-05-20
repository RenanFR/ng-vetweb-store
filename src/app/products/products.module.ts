import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HotTableModule } from '@handsontable/angular';

import { ProductsComponent } from './products.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from '../home/home.module';
import { SharedModule } from '../shared/shared.module';
import { DrilldownProductComponent } from './drilldown.product.component';
import { ProductImageModalComponent } from './product.img.modal.component';
import { OpenImageDirective } from './open.image.directive';

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
    ProductFormComponent,
    DrilldownProductComponent,
    ProductImageModalComponent,
    OpenImageDirective
  ]
})
export class ProductsModule { }
