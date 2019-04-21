import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';


@Component({
  selector: 'vetweb-categories',
  templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {

  constructor(private service: CategoryService) { }

  categories: any[] = [];

  ngOnInit() {
     this.service.getCategories()
      .subscribe((cat) => {
          this.categories = cat;
      });
  }

}
