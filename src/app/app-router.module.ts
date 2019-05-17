import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductsComponent } from './products/products.component';
import { CategoryFormComponent } from './category/category.form.component';
import { CategoriesComponent } from './category/categories.component';
import { AuthenticationBaseComponent } from './home/auth.base.component';
import { EnableToLogin } from './home/login/enable.to.login';
import { DrilldownProductComponent } from './products/drilldown.product.component';
import { isLoggedGuard } from './home/login/is.logged.guard';
import { CategoryDetailsComponent } from './category/category.details.component';

const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationBaseComponent,
    canActivate: [EnableToLogin],
    children: [
      {
        path: '', 
        component: LoginComponent
      }
    ]
  },
  {
    path: 'product/form',
    component: ProductFormComponent,
    canActivate: [isLoggedGuard]
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [isLoggedGuard]
  },
  {
    path: 'categories/:categoryId',
    component: CategoryDetailsComponent,
    canActivate: [isLoggedGuard]
  },  
  {
    path: 'category/form',
    component: CategoryFormComponent,
    canActivate: [isLoggedGuard]
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [isLoggedGuard]
  },
  {
    path: 'product/drilldown',
    component: DrilldownProductComponent
  },  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
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
