import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'vetweb-category-details',
    templateUrl: './category.details.component.html'
  })
export class CategoryDetailsComponent implements OnInit{

  constructor(
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    let categoryId = this.route.snapshot.params.categoryId;
    alert(categoryId);
  }

}