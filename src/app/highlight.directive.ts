import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() mark = 0;
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.mark >= 90) {
      this.el.nativeElement.style.color = 'green';
    } else if (this.mark >= 80 && this.mark < 90) {
      this.el.nativeElement.style.color = 'blue';
    } else if (this.mark >= 70 && this.mark < 80) {
      this.el.nativeElement.style.color = 'yellow';
    } else if (this.mark >= 60 && this.mark < 70) {
      this.el.nativeElement.style.color = 'orange';
    } else {
      this.el.nativeElement.style.color = 'red';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }
}
