import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HotTableModule } from '@handsontable/angular';

import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './categories.component';
import { CategoryFormComponent } from './category.form.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HotTableModule.forRoot(),
    FormsModule,
    HomeModule
  ],
  declarations: [
    CategoriesComponent,
    CategoryFormComponent
  ]
})
export class CategoryModule { }
