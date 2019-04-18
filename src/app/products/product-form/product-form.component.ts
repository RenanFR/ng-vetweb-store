import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  product: Product;

  constructor(
      private formBuilder: FormBuilder,
      private service: ProductsService
  ) { }

  ngOnInit() {
      this.productForm = this.formBuilder.group({
          description:[''],
          price:['']
      });
  }

  onSubmit(): void {
    const description = this.productForm.get('description').value;
    const price = this.productForm.get('price').value;
    console.log(description);
    console.log(price);
    this.product = new Product(description, price);
    console.log(this.product);
    this.service.saveProduct(this.product)
      .subscribe(data => {
          console.log(data);
      });
  }

}
