import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive({
    selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
    constructor (private el: ElementRef) {
        this.setHeight(180);
        this.setBorder('#f5f5f5');
        this.setPadding(.5);
    }

    @Input('pkmnBorderCard') borderColor?: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || '#0d47a1 ');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5');
    }
    private setHeight(height: number) {
        this.el.nativeElement.style.height = `${height}px`;
    }

    private setBorder(color: string) {
        this.el.nativeElement.style.border = `solid 2px ${color}`;
        this.el.nativeElement.style.borderRadius = '5px';
    }

    private setPadding(padding: number) {
        this.el.nativeElement.style.padding = `${padding}rem`;
    }
}