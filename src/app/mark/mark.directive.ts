import {AfterViewInit, Directive, ElementRef} from "@angular/core";

import * as $ from "jquery";
import "../../assets/jquery.mark.min.js";
import {Sharedservice} from "./sharedservice.service";

@Directive({
  selector: '[Mark]'
})
export class MarkDirective implements AfterViewInit {

  markarea: any;

  options = {
    "element": "mark",
    "className": "",
    "exclude": [],
    "separateWordSearch": true,
    "accuracy": "partially",
    "diacritics": true,
    "synonyms": {},
    "iframes": false,
    "iframesTimeout": 5000,
    "acrossElements": false,
    "caseSensitive": false,
    "ignoreJoiners": false,
    "ignorePunctuation": [],
    "wildcards": "disabled",
    "each": function (node) {
      // node is the marked DOM element
    },
    "filter": function (textNode, foundTerm, totalCounter, counter) {
      // textNode is the text node which contains the found term
      // foundTerm is the found search term
      // totalCounter is a counter indicating the total number of all marks
      //              at the time of the function call
      // counter is a counter indicating the number of marks for the found term
      return true; // must return either true or false
    },
    "noMatch": function (term) {
      // term is the not found term
    },
    "done": function (counter) {
      // counter is a counter indicating the total number of all marks
    },
    "debug": false,
    "log": window.console
  };

  constructor(private elementRef: ElementRef,
              private ss: Sharedservice) {
  }

  ngAfterViewInit() {
    console.log($.fn.jquery);
    this.ss.getSearchObserver().subscribe(item => {
      console.log(item);
      console.log('notified by shared service');
      if (item !== null) {
        this.highlightText(item);
      }
    });
  }

  highlightText(keywork) {
    console.log(keywork);
    this.markarea = $(this.elementRef.nativeElement);
    $(this.markarea).unmark([this.options]);
    if (keywork) {
      $(this.markarea).mark(keywork, [this.options]);
    }
  }
}
