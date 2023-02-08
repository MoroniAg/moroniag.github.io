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
    // console.log("color oninit: "+this.backgroundColor)
    if (this.backgroundColor != null) {
      // console.log("color oninit if: "+this.backgroundColor)
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.backgroundColor)
      // renderer.setStyle(el.nativeElement,'backgroundColor','blue')
      // this.el.nativeElement.style.backgroundColor = this.backgroundColor;
    }
    if (this.width != null) {
      this.renderer.setStyle(this.el.nativeElement, 'width', this.width + 'px')
    }
    if (this.height != null) {
      this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px')
    }
    if (this.backgroundImage != null) {
      this.renderer.setStyle(this.el.nativeElement, 'background-image', 'url(' + this.backgroundImage + ')')
      // this.renderer.setStyle(this.el.nativeElement, 'background-size', '100% 100%')

    }
    if (this.widthPercent != null) {
      this.renderer.setStyle(this.el.nativeElement, 'width', this.widthPercent + '%')
      // this.renderer.setStyle(this.el.nativeElement, 'background-size', '100% 100%')

    }

  }

}
