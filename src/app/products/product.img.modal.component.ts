import { Component, Input, OnInit } from "@angular/core";
import { Product } from "./product";

@Component({
    selector: 'vetweb-product-img-modal',
    templateUrl: './product.img.modal.component.html'
  })
export class ProductImageModalComponent {

  @Input() product: Product;
  
}