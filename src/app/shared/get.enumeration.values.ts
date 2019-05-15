import { PipeTransform, Pipe } from "@angular/core";
import { PriceRange } from "../products/price.range";

@Pipe({ name: 'enumVals'})
export class GetEnumerationValues implements PipeTransform {

    transform(enumeration: any, ...args: any[]) {
        let valsEnum = [];
        for (var val in enumeration) {
            console.log(PriceRange[val]);
            valsEnum.push(val);
        }
        return valsEnum;
    }
    
}
