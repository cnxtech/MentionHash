import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[href]',
  host : {
    '(click)' : 'preventDefault($event)'
  }
})
export class MyInhertLinkDirective {

  constructor() { }

  @Input() href: string;

  preventDefault(event) {
    console.log(event);
    console.log(this.href);
    console.log(this.href.length);
    if(this.href.length > 0 || this.href === '#') event.preventDefault();
  }

}
