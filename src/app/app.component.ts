import { AfterViewInit, Component, ElementRef,  Renderer2,    VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit  {
  name = 'Angular ' + VERSION.major;
  @ViewChild('child1') child1:ElementRef;
  constructor(private render2:Renderer2){

  }
ngAfterViewInit(): void {
this.render2.setStyle(this.child1.nativeElement,'background','red');
this.render2.addClass(this.child1.nativeElement,'child1');
this.render2.setAttribute(this.child1.nativeElement,'tiltle','this title using render2');
}
}
