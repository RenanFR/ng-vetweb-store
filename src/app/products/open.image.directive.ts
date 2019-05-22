import { Directive, ElementRef, Renderer, Input } from "@angular/core";
import { HostListener } from "@angular/core";

@Directive({
    selector: '[openImage]'   
})
export class OpenImageDirective {

    imageHeader: string = 'imageHeader';

    constructor(
        private element: ElementRef<HTMLElement>, 
        private renderer: Renderer 
    ){ }

    @HostListener('mouseover')
    public openImage(): void {
        this.renderer.setElementStyle(document.getElementById(this.imageHeader), 'display', 'block');
        this.renderer.setElementStyle(this.element.nativeElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling, 'display', 'block');
    }

    @HostListener('mouseout')
    public closeImage(): void {
        this.renderer.setElementStyle(document.getElementById(this.imageHeader), 'display', 'none');
        this.renderer.setElementStyle(this.element.nativeElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling, 'display', 'none');
    }    

}