import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[btnStyles]'
})
export class BtnStylesDirective  implements OnInit  {
  @Input() btnStylesDefaultBg: string = 'linear-gradient(#d7485c, #71081e)';

  constructor(private btn: ElementRef, private rend: Renderer2) {
  }
  @HostListener('mouseenter')
  btnHover() {
    this.rend.setStyle(this.btn.nativeElement, 'box-shadow', '0 5px 9px 1px rgba(130, 19, 40, 0.5)')
  }
  @HostListener('mouseleave')
  btnLeave() {
    this.rend.setStyle(this.btn.nativeElement, 'box-shadow', 'none');
  }

  ngOnInit() {
    this.rend.setStyle(this.btn.nativeElement, 'background', 'linear-gradient(#d7485c, #71081e)');
  }
}
