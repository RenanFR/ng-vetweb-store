import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from './category.service';
import { ProductsService } from '../products/products.service';
import { BreadcrumbsService } from '../home/breadcrumbs.service';
import { Breadcrumb } from '../home/breadcrumb';


@Component({
  selector: 'vetweb-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {

  breadcrumbs: Map<string, Breadcrumb> = new Map([ ['/categories', {link: 'List of categories', isActive: true}], ['/category/form', {link: 'New category', isActive: false}] ]);

  constructor(
    private service: CategoryService,
    private productsService: ProductsService,
    private breadcrumbsService: BreadcrumbsService
  ) { }

  categories: any[] = [];
  amountProducts:number;

  ngOnInit() {
    this.breadcrumbsService.breadcrumbSubject.next(this.breadcrumbs);
    this.productsService
      .getTotal()
      .subscribe(amountProducts => {
        this.amountProducts = amountProducts;
        this.service.getCategories()
        .subscribe((cat) => {
            this.categories = cat;
            console.log(this.categories);
        });
    });
  }

}
