import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'vetweb-category-form',
  templateUrl: './category.form.component.html'
})
export class CategoryFormComponent implements OnInit {

  category:Category = new Category();
  response:string = '';

  constructor(private service:CategoryService) { }

  save() {
    this.service.save(this.category)
      .subscribe((resp) => {
        console.log(resp.toString());
        this.response = resp.toString();
      });
  }

  ngOnInit() {
  }

}
