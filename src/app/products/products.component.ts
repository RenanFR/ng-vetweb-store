import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { BreadcrumbsService } from '../home/breadcrumbs.service';
import { Breadcrumb } from '../home/breadcrumb';
import { Product } from './product';


@Component({
  selector: 'vetweb-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  breadcrumbs: Map<string, Breadcrumb> = new Map([ ['/products', {link: 'List of Products', isActive: true}], ['/product/form', {link: 'New Product', isActive: false}] ]);

  constructor(
      private service: ProductsService,
      private breadcrumbsService: BreadcrumbsService
  ) {
    service.newProductSubject.subscribe(b => {
      console.log('A new product was included');
      this.init();
    });
  }

  products: Product[] = [];

  ngOnInit() {
    this.init();
  }

  init() {
    this.breadcrumbsService.breadcrumbSubject.next(this.breadcrumbs);
    this.service.getProducts()
      .subscribe((prod) => {
        this.products = prod;
      });
  }  

}
