import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from './category.service';
import { ProductsService } from '../products/products.service';


@Component({
  selector: 'vetweb-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {

  constructor(
    private service: CategoryService,
    private productsService: ProductsService    
  ) { }

  categories: any[] = [];
  amountProducts:number;
  @ViewChild('amtProds')amountProds:ElementRef<HTMLSpanElement>;

  ngOnInit() {
    this.productsService.getTotal().subscribe(amountProducts => {this.amountProducts = amountProducts;});
     this.service.getCategories()
      .subscribe((cat) => {
          this.categories = cat;
          this.categories = this.categories.map(c => Object.assign({}, c, { 'percentageOfTotal': ((c.amountProducts/parseInt(this.amountProds.nativeElement.textContent.match(/\d/g).toString())) * 100).toString() + '%' }));
          console.log(this.categories);
      });
  }

}
