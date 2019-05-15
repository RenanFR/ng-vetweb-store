import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./products.service";

@Component({
    selector: 'vetweb-drilldown',
    templateUrl: './drilldown.product.component.html'
})
export class DrilldownProductComponent implements OnInit{
    
    constructor(
        private productsService: ProductsService 
    ){}

    ngOnInit(): void {
        this.productsService
        .drilldown()
        .subscribe(response => {
            console.log(response);
        });
    }

}