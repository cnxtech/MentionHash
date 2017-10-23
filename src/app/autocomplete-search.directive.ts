import {AfterViewInit, Directive, ElementRef, OnDestroy} from '@angular/core';

import * as $ from "jquery";

@Directive({
  selector: '[AutocompleteSearch]'
})
export class AutocompleteSearchDirective implements AfterViewInit,OnDestroy{
  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }


  /*autocompletearea: any;

  constructor(private elementRef: ElementRef) { }

  ngOnDestroy() {

  }

  ngAfterViewInit() {
    console.log($.fn.jquery);
    let lastQuery = '';
    let NB_RESULTS_DISPLAYED = 5;
    this.autocompletearea = $(this.elementRef.nativeElement);

    $(this.autocompletearea).autocomplete({ hint: false }, [
      {
        source: function(query, cb) {
          lastQuery = query;
          console.log(lastQuery);

            var words = ['google', 'facebook', 'github', 'microsoft', 'yahoo','કેમ છો?','कैसे हो?'];
            cb($.map(words, function (word) {
            return word.indexOf(lastQuery) === 0 ? word : null;
          }));
          /!*index.search(q, { hitsPerPage: 5 }, function(error, content) {
            if (error) {
              cb([]);
              return;
            }
            cb(content.hits, content);
          });*!/
        },
       // displayKey: 'name',
        templates: {
          suggestion: function(suggestion) {
            return suggestion._highlightResult.name.value;
          }
        }
      }
    ]);
  }*/

}
