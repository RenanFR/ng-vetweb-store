import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/category/category';
import { Router } from '@angular/router';
import { PriceRange } from '../price.range';
import { Breadcrumb } from 'src/app/home/breadcrumb';
import { BreadcrumbsService } from 'src/app/home/breadcrumbs.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {

  breadcrumbs: Map<string, Breadcrumb> = new Map([ ['/products', {link: 'List of Products', isActive: false}], ['/product/form', {link: 'New Product', isActive: true}] ]);
  productForm: FormGroup;
  product: Product;
  categories: Category[] = [];
  priceRanges = PriceRange;

  constructor(
      private formBuilder: FormBuilder,
      private categoryService: CategoryService,
      private router: Router,
      private service: ProductsService,
      private breadcrumbsService:BreadcrumbsService 
  ) { }

  ngOnInit() {
      this.breadcrumbsService.breadcrumbSubject.next(this.breadcrumbs);
      this.categoryService.getCategories()
        .subscribe(cat => {
          this.categories = cat;
        });
      this.productForm = this.formBuilder.group({
          description:[''],
          category:[this.categories[1]],
          price:0,
          priceRange:[]
      });
  }

  onSubmit(): void {
    const description = this.productForm.get('description').value;
    const price = this.productForm.get('price').value;
    const category = this.productForm.get('category').value;
    const priceRange = this.productForm.get('priceRange').value;
    console.log(priceRange);
    this.product = new Product(description, price, category, priceRange);
    console.log(this.product);
    this.service.saveProduct(this.product)
      .subscribe(data => {
          console.log(data);
          this.service.newProductSubject.next(true);
    });
    this.router.navigateByUrl('products');
  }

}
