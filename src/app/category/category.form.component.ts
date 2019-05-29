import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { BreadcrumbsService } from '../home/breadcrumbs.service';
import { Breadcrumb } from '../home/breadcrumb';
import { NotificationService } from '../shared/notification.service';

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
    private notificationService: NotificationService,
    private breadcrumbsService:BreadcrumbsService
  ) { }

  save() {
    this.category.userRegistration = localStorage.getItem('user');
    this.category.dateRegistration = new Date().getTime().toString();
    this.service.save(this.category)
    .subscribe((resp) => {
      console.log(resp.toString());
      this.response = resp.toString();
      this.notificationService.success('New category included with description ' + (this.category.description), true);
    });
  }
  
  ngOnInit() {
    this.breadcrumbsService.breadcrumbSubject.next(this.breadcrumbs);
  }

}
