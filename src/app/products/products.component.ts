import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';


@Component({
  selector: 'vetweb-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  constructor(private service: ProductsService) {

    service.newProductSubject$.subscribe(b => {
      this.init();
    });

  }

  products: any[] = [];

  ngOnInit() {
    this.init();
  }

  init() {
    this.service.getProducts()
    .subscribe((prod) => {
      this.products = prod;
    });
  }  

}
