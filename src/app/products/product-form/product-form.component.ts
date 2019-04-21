import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  product: Product;
  categories: Category[] = [];

  constructor(
      private formBuilder: FormBuilder,
      private categoryService: CategoryService,
      private service: ProductsService
  ) { }

  ngOnInit() {
      this.categoryService.getCategories()
        .subscribe(cat => {
          this.categories = cat;
        });
      this.productForm = this.formBuilder.group({
          description:[''],
          category:[this.categories[1]],
          price:10
      });
  }

  onSubmit(): void {
    const description = this.productForm.get('description').value;
    const price = this.productForm.get('price').value;
    const category = this.productForm.get('category').value;
    this.product = new Product(description, price, category);
    console.log(this.product);
    this.service.saveProduct(this.product)
      .subscribe(data => {
          console.log(data);
      });
  }

}
