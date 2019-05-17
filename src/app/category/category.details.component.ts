import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "./category.service";
import { Category } from "./category";
import { Breadcrumb } from "../home/breadcrumb";
import { BreadcrumbsService } from "../home/breadcrumbs.service";

@Component({
    selector: 'vetweb-category-details',
    templateUrl: './category.details.component.html'
  })
export class CategoryDetailsComponent implements OnInit{

  category: Category;
  breadcrumbs: Map<string, Breadcrumb> = new Map([ ['/categories', {link: 'List of categories', isActive: false}], ['/category/form', {link: 'New category', isActive: true}] ]);  

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private breadcrumbsService:BreadcrumbsService
  ){ }

  ngOnInit(): void {
    let categoryId = this.route.snapshot.params.categoryId;
    this.breadcrumbsService.breadcrumbSubject.next(this.breadcrumbs);
    this.categoryService.findById(categoryId)
      .subscribe((cat) => {
        this.category = cat;
      });
  }

}