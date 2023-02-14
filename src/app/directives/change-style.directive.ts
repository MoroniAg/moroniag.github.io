import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})
export class ChangeStyleDirective implements OnInit {


  @Input()
  backgroundColor!: string
  @Input()
  width!: number
  @Input()
  height!: number
  @Input()
  backgroundImage!: string
  @Input()
  widthPercent!: any

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    if (this.backgroundColor != null) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.backgroundColor)
    }
    if (this.width != null) {
      this.renderer.setStyle(this.el.nativeElement, 'width', this.width + 'px')
    }
    if (this.height != null) {
      this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px')
    }
    if (this.backgroundImage != null) {
      this.renderer.setStyle(this.el.nativeElement, 'background-image', 'url(' + this.backgroundImage + ')')
    }
    if (this.widthPercent != null) {
      this.renderer.setStyle(this.el.nativeElement, 'width', this.widthPercent + '%')
    }

  }

}
