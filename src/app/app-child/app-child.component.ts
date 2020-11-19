import { AfterContentInit, Component, ContentChild,  ElementRef,  OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit,AfterContentInit {
@ContentChild('childContent') childParagraph:ElementRef;

  constructor(private render2:Renderer2) { }
ngAfterContentInit(): void {//after loading child conent initilze
console.log(this.childParagraph) //apply style to child content which is in parent compoent and that content is shown in child component using <ng-content> projection.
// modify child component thst exist in home/patent compoent
this.render2.setStyle(this.childParagraph.nativeElement,'color','pink');
}

  ngOnInit() {
    console.log(this.childParagraph)
  }
  addText(){
   var text = this.render2.createText('this text is created by Render2 in child compoent');
   this.render2.appendChild(this.childParagraph.nativeElement,text);

  }

}