import { Directive, ElementRef} from '@angular/core';
@Directive({
   selector: '[changeText]'
})
export class ChangeTextDirective {
   constructor(Element: ElementRef) {
      console.log(Element);
      Element.nativeElement.innerText = "@Google Developers";
   }
}