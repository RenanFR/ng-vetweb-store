import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from './category.service';
import { ProductsService } from '../products/products.service';
import { BreadcrumbsService } from '../home/breadcrumbs.service';


@Component({
  selector: 'vetweb-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {

  breadcrumbs: Map<string, string> = new Map([ ['/categories', 'List of categories'], ['/category/form', 'New category'] ]);

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
            this.categories = this.categories.map(c => Object.assign({}, c, { 'percentageOfTotal': (c.amountProducts/this.amountProducts).toString() + '%' }));
            console.log(this.categories);
        });        
    });
  }

}
