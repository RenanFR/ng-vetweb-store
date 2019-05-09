import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { BreadcrumbsService } from '../home/breadcrumbs.service';


@Component({
  selector: 'vetweb-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  breadcrumbs: string[] = ['d', 'e', 'f'];

  constructor(
    private service: ProductsService,
    private breadcrumbsService: BreadcrumbsService
    ) {

    service.newProductSubject$.subscribe(b => {
      this.init();
    });

  }

  products: any[] = [];

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
