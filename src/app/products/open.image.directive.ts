import { Directive, ElementRef, Renderer } from "@angular/core";
import { HostListener } from "@angular/core";

@Directive({
    selector: '[openImage]'   
})
export class OpenImageDirective {

    constructor(
        private element: ElementRef,
        private renderer: Renderer 
    ){ }

    @HostListener('mouseover')
    public openImage(): void {
        console.log('openImage');
        this.element.nativeElement.click();
    }

}