import { Directive,Renderer2,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appAddChild]'
})
export class AddChildDirective {
@HostListener('click') onclick(){
  var div = this.render2.createElement('div');
  var text = this.render2.createText('hello render2 element,i am new');
  this.render2.appendChild(div,text);
  this.render2.addClass(div,'wild');
 this.render2.appendChild(this.el.nativeElement,div);
}
  constructor(private el:ElementRef, //use for DOM assist
  private render2:Renderer2 //use for modify DOM
  ) {

   }

}