import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductsComponent } from './products/products.component';
import { CategoryFormComponent } from './category/category.form.component';
import { CategoriesComponent } from './category/categories.component';
import { AuthenticationBaseComponent } from './home/auth.base.component';

const routes: Routes = [
  {
    path: 'product/form',
    component: ProductFormComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },  
  {
    path: 'category/form',
    component: CategoryFormComponent
  },    
  {
    path: 'categories',
    component: CategoriesComponent
  },      
  {
    path: 'login',
    component: AuthenticationBaseComponent,
    children: [
      {
        path: '', 
        component: LoginComponent
      }
  ]    
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
