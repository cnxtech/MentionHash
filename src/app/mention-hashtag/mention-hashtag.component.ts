import {AfterViewInit, Component, ElementRef, OnChanges, OnDestroy} from "@angular/core";

import * as $ from "jquery";
import "../../assets/jquery.textcomplete.min.js";

@Component({
  selector: 'mention-hashtag',
  template: '<ng-content></ng-content>'
})
export class MentionHashtagComponent implements AfterViewInit, OnChanges, OnDestroy {


  autocompletetextarea: any;

  constructor(private elementRef: ElementRef) {
  }

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

          var words = ['google', 'facebook', 'github', 'microsoft', 'yahoo', 'કેમ છો?', 'कैसे हो?'];
          callback($.map(words, function (word) {
            return word.indexOf(lastQuery) === 0 ? word : null;
          }));
        },

        // #5 - Template used to display each result obtained by the Algolia API
        template: function (hit) {
          // Returns the highlighted version of the name attribute
          return hit;
        },

        // #6 - Template used to display the selected result in the contenteditable's div
        replace: function (hit) {
          let html = '<a href="" style="color: #2196f3">';
          html += '@' + hit + '</a> ';
          return '' + html;
        },

        maxCount: 5
      }, {
        // #3 - Rgular experession used to trigger search
        match: /(^|\s)#(\w*(?:\s*\w*)*)$/,

        // #4 - Function called at every new keystroke
        search: function (query, callback) {
          lastQuery = query;
          console.log(lastQuery);
          var words = ['google', 'facebook', 'github', 'microsoft', 'yahoo', 'કેમ છો?', 'कैसे हो?'];
          callback($.map(words, function (word) {
            return word.indexOf(lastQuery) === 0 ? word : null;
          }));
        },

        // #5 - Template used to display each result obtained by the Algolia API
        template: function (hit) {
          // Returns the highlighted version of the name attribute
          return hit;
        },

        // #6 - Template used to display the selected result in the contenteditable's div
        replace: function (hit) {
          let html = '<a href="" style="color: #2196f3">';
          html += '#' + hit + '</a> ';
          return '' + html;
        },

        maxCount: 5
      }
    ], {
      // type any error resolved
      // https://medium.com/@sandeepkgupta007/it-might-be-helpful-for-people-to-use-72196c34475b
      // #7 - Special adapter to handle HTMLContentEditable divs
      adapter: (<any>$.fn.textcomplete).HTMLContentEditable,
      footer: '<div></div>'
    });

  }

  ngOnChanges() {
    $(this.autocompletetextarea).on('keyup', function (event: Object) {
      console.log('text length: ',event.toString().length);
    }).on('keydown', function (event: Object) {
      console.log('text length: ',event.toString().length);
    });
  }

  check_charcount(e) {
    console.log('text length: ',$(this.autocompletetextarea).text().length);
    if (e.which != 8 && $(this.autocompletetextarea).text().length < 3) {
      e.preventDefault();
    }
  }

  ngOnDestroy() {
    $(this.autocompletetextarea).textcomplete('destroy');
  }

}
