import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

const routes: Routes = [
  {
    path: 'product/form',
    component: ProductFormComponent
  },  
  {
    path: '**',
    component: LoginComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
