import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverBorder]'  // O seletor para a diretiva
})
export class HoverBorderDirective {
  @Input('appHoverBorder') borderColor: string = '#FF5100';  // Cor da borda com valor default

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('none');
  }

  private setBorder(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${color}`);
  }
}
