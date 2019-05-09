import { Category } from "../category/category";
import { PriceRange } from "./price.range";

export class Product {

    id: number;
    description:string;
    price:number;
    category:Category;
    priceRange: PriceRange;

    constructor(description: string, price: number, category:Category) {
        this.description = description;
        this.price = price;
        this.category = category;
    }

}
