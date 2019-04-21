import { Category } from "../category/category";

export class Product {

    id: number;
    description:string;
    price:number;
    category:Category;

    constructor(description: string, price: number, category:Category) {
        this.description = description;
        this.price = price;
        this.category = category;
    }

}
