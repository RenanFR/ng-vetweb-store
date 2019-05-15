import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { BreadcrumbsService } from '../home/breadcrumbs.service';
import { Breadcrumb } from '../home/breadcrumb';

@Component({
  selector: 'vetweb-category-form',
  templateUrl: './category.form.component.html'
})
export class CategoryFormComponent implements OnInit {

  breadcrumbs: Map<string, Breadcrumb> = new Map([ ['/categories', {link: 'List of categories', isActive: false}], ['/category/form', {link: 'New category', isActive: true}] ]);
  category:Category = new Category();
  response:string = '';

  constructor(
    private service:CategoryService,
    private breadcrumbsService:BreadcrumbsService
  ) { }

  save() {
    this.service.save(this.category)
    .subscribe((resp) => {
      console.log(resp.toString());
      this.response = resp.toString();
    });
  }
  
  ngOnInit() {
    this.breadcrumbsService.breadcrumbSubject.next(this.breadcrumbs);
  }

}
