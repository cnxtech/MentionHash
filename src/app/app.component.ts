import {AfterViewInit, Component, OnDestroy, OnInit} from "@angular/core";

import * as $ from "jquery";
import "../assets/jquery.textcomplete.min.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  inputText: string;

  onTextChange(input) {
    console.log(input);
  }

  constructor() {

  }

  ngAfterViewInit() {

      console.log($.fn.jquery);
      let lastQuery = '';
      let NB_RESULTS_DISPLAYED = 5;

      $('#autocomplete-textarea').textcomplete([
        {
          // #3 - Rgular experession used to trigger search
          match: /(^|\s)@(\w*(?:\s*\w*)*)$/,

          // #4 - Function called at every new keystroke
          search: function (query, callback) {
            lastQuery = query;
            console.log(lastQuery);
            var words = ['google', 'facebook', 'github', 'microsoft', 'yahoo'];
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
            let html = '<a href="" style="background: cadetblue">';
            html += '@' + hit + '</a> ';
            return ' ' + html;
          },

          maxCount: 5
          /*adapter: $.fn.textcomplete.HTMLContentEditable,
          footer: '<div></div>'*/
        }
      ], {
        // #7 - Special adapter to handle HTMLContentEditable divs
        adapter: ($.fn.textcomplete).HTMLContentEditable,
        footer: '<div></div>'
      });

  }

  ngOnInit() {

  }

}
