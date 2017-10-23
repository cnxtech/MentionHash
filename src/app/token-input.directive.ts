import {AfterViewInit, Directive, ElementRef, OnDestroy} from '@angular/core';

import * as $ from "jquery";
import "../assets/jquery.tokeninput.js";

@Directive({
  selector: '[TokenInput]'
})
export class TokenInputDirective implements AfterViewInit,OnDestroy {

  autocompletetextarea: any;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    console.log($.fn.jquery);
    this.autocompletetextarea = $(this.elementRef.nativeElement);

    $(this.autocompletetextarea).tokenInput([
      {id: 7, name: "Ruby"},
      {id: 11, name: "Python"},
      {id: 13, name: "JavaScript"},
      {id: 17, name: "ActionScript"},
      {id: 19, name: "Scheme"},
      {id: 23, name: "Lisp"},
      {id: 29, name: "C#"},
      {id: 31, name: "Fortran"},
      {id: 37, name: "Visual Basic"},
      {id: 41, name: "C"},
      {id: 43, name: "C++"},
      {id: 47, name: "Java"}
    ]);

  }

  ngOnDestroy(): void {
  }

}
