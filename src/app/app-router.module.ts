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
    data: {
      title: 'Authentication'
    },
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
    canActivate: [isLoggedGuard],
    data: {
      title: 'New product form'
    }
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [isLoggedGuard],
    data: {
      title: 'List of products'
    }
  },
  {
    path: 'categories/:categoryId',
    component: CategoryDetailsComponent,
    canActivate: [isLoggedGuard],
    data: {
      title: 'Category details'
    }
  },  
  {
    path: 'category/form',
    component: CategoryFormComponent,
    canActivate: [isLoggedGuard],
    data: {
      title: 'New category form'
    }
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [isLoggedGuard],
    data: {
      title: 'List of categories'
    }
  },
  {
    path: 'product/drilldown',
    component: DrilldownProductComponent,
    data: {
      title: 'Product drill down'
    }
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
