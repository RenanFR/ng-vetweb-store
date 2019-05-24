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
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

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
  fileImage: File;
  filePreview: string;
  uploadProgress: number = 0;
  currentPriceRange: PriceRange = PriceRange.UNKNOWN;

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
          priceRange:[],
          fileImage: ['']
      });
  }

  public onSubmit(): void {
    const description = this.productForm.get('description').value;
    const price = this.productForm.get('price').value;
    const category = this.productForm.get('category').value;
    const priceRange = this.productForm.get('priceRange').value;
    this.product = new Product(description, price, category, priceRange);
    this.service.saveProduct(this.product, this.fileImage)
      .pipe(finalize(() => {
        console.log('New product requisition ended');
        this.router.navigateByUrl('products');
      }))
      .subscribe((event: HttpEvent<any>) => {
          if (event.type == HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(100 * (event.loaded/event.total));
            console.log('Updating progress ' + this.uploadProgress);
          }
          else if (event.type == HttpEventType.Response) {
            this.service.newProductSubject.next(true);
          }
    });
  }

  public handleFile(file: File): void {
    this.fileImage = file;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      this.filePreview = event.target.result;
    };
  }

  public adjustPriceRange(price: any): void {
    let productPrice: number = price.target.value;
    console.log(productPrice);
    let rangeInput = this.productForm.get('priceRange');
    console.log(rangeInput.value);
    if (productPrice >= 0 && productPrice <= 100) {
      rangeInput.setValue(PriceRange.ZEROTOHUNDRED);
    } else if (productPrice > 100 && productPrice <= 500) {
      rangeInput.setValue(PriceRange.HUNDREDTOFIVEHUNDREDS);
    } else if (productPrice > 500 && productPrice <= 1000) {
      rangeInput.setValue(PriceRange.FIVEHUNDREDSTOTHOUSAND);
    } else if (productPrice > 1000 && productPrice <= 10000) {
      rangeInput.setValue(PriceRange.THOUSANDANDABOVE);
    } else {
      rangeInput.setValue(PriceRange.UNKNOWN);
    }
  }

}
