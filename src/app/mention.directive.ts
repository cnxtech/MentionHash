import {AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, OnDestroy, Output} from "@angular/core";

import * as $ from "jquery";
import "../assets/jquery.textcomplete.min.js";

@Directive({
  selector: '[Mention]'
})
export class MentionDirective implements AfterViewInit,OnDestroy {

  autocompletetextarea: any;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {

    console.log($.fn.jquery);
    let lastQuery = '';
    let NB_RESULTS_DISPLAYED = 5;
    this.autocompletetextarea = $(this.elementRef.nativeElement);

    $(this.autocompletetextarea).textcomplete([
      {
        // #3 - Rgular experession used to trigger search
        match: /(^|\s)@(\w*(?:\s*\w*)*)$/,

        // #4 - Function called at every new keystroke
        search: function (query, callback) {
          lastQuery = query;
          console.log(lastQuery);

          var words = ['google', 'facebook', 'github', 'microsoft', 'yahoo','કેમ છો?','कैसे हो?'];
          callback($.map(words, function (word) {
            return word.indexOf(lastQuery) === 0 ? word : null;
          }));
        },

        // #5 - Template used to display each result obtained by the Algolia API
        template: function (hit) {
          // Returns the highlighted version of the name attribute
          return ' '+hit;
        },

        //index: 3,
        // #6 - Template used to display the selected result in the contenteditable's div
        replace: function (hit) {
          let html = '<a href="" style="color: #2196f3">';
          html += '@' + hit + '</a> ';
          return ' ' + html;
        },

        maxCount: 5
      },{
        // #3 - Rgular experession used to trigger search
        match: /(^|\s)#(\w*(?:\s*\w*)*)$/,

        // #4 - Function called at every new keystroke
        search: function (query, callback) {
          lastQuery = query;
          console.log(lastQuery);
          var words = ['google', 'facebook', 'github', 'microsoft', 'yahoo','કેમ છો?','कैसे हो?'];
          callback($.map(words, function (word) {
            return word.indexOf(lastQuery) === 0 ? word : null;
          }));
        },

        // #5 - Template used to display each result obtained by the Algolia API
        template: function (hit) {
          // Returns the highlighted version of the name attribute
          return ' '+hit;
        },

        //index: 3,
        // #6 - Template used to display the selected result in the contenteditable's div
        replace: function (hit) {
          let html = '<a href="" style="color: #2196f3">';
          html += '#' + hit + '</a> ';
          return  html;
        },

        maxCount: 5
      }
    ], {
      // type any error resolved
      // https://medium.com/@sandeepkgupta007/it-might-be-helpful-for-people-to-use-72196c34475b
      // #7 - Special adapter to handle HTMLContentEditable divs
      adapter: (<any>$.fn.textcomplete).HTMLContentEditable,
      debounce: 300,
      rightEdgeOffset: 100,
      //onKeydown: onKeydownFunc,
      footer: '<div></div>'
    });

  }

  ngOnDestroy() {
    $(this.autocompletetextarea).textcomplete('destroy');
  }

  /*@HostListener('window:keyup', ['$event'])
   onKeyUp(e) {
      console.log('keyup', e);
      console.log('keyup', $(this.autocompletetextarea).text());
      console.log('keyup', $(this.autocompletetextarea).text().length);
      if ($(this.autocompletetextarea).text().length > 3) {
        this.isValidForPost.emit(true);
      } else {
        this.isValidForPost.emit(false);
      }
   }*/

   /*@HostListener('window:keydown', ['$event'])
   onKeyDown(e) {
     /!*console.log('keydown', e);
     console.log('keydown', $(this.autocompletetextarea).text());
     console.log('keydown', $(this.autocompletetextarea).text().length);
     if ($(this.autocompletetextarea).text().length > 3) {
       this.isValidForPost.emit(true);
     } else {
       this.isValidForPost.emit(false);
     }*!/
   }*/

}

var onKeydownFunc = function (e, commands) {
  console.log(e);
  console.log(commands);
  // `commands` has `KEY_UP`, `KEY_DOWN`, `KEY_ENTER`, `KEY_PAGEUP`, `KEY_PAGEDOWN`,
  // `KEY_ESCAPE` and `SKIP_DEFAULT`.
  /*if (e.ctrlKey && e.keyCode === 74) {
    // Treat CTRL-J as enter key.
    return commands.KEY_ENTER;
  }*/
  // If the function does not return a result or undefined is returned,
  // the plugin uses default behavior.
};
