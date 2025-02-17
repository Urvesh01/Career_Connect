import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutoCapitalize]',
})
export class AutoCapitalizeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    const capitalizedValue = value
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
    this.renderer.setProperty(this.el.nativeElement, 'value', capitalizedValue);
  }
}
