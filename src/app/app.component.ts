import {AfterViewInit, Component, OnInit} from "@angular/core";
import * as $ from "jquery";
import "../assets/jquery.textcomplete.min.js";
import '../assets/jquery.datepair.min.js';
import {Sharedservice} from "./mark/sharedservice.service";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {FormControl} from "@angular/forms";
import {ApiResponse} from "./interfaces/api-response";

// import * as mData from "../../node_modules/url-metadata/index.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  timeStart:string;
  dateStart:string;

  timeEnd:string;
  dateEnd:string;

  rangeError: any;
  rangeIncomplete: any
  rangeSelected: any;


  timeT:string;
  dateS:string;

  inputText;

  title = 'PP';
  searchTermhe = 'test';

  image1 = 'https://s3.ap-south-1.amazonaws.com/jambos/jambo_1508996553924.png';

  imagePortrait2 = 'https://s3.ap-south-1.amazonaws.com/jambos/jambo_1509088470342.jpg';

  imagecover = 'https://naturecanada.ca/wp-content/uploads/2015/11/field-858650_1280-940x300.png';

  imagePortrait = 'https://i.pinimg.com/736x/5a/e9/50/5ae9501fc3b49810db7901873f77d6f7--beautiful-nature-photos-beautiful-days.jpg';

  imageBig = 'http://www.hdwallpapery.com/static/images/high-resolution-nature-wallpaper.jpg';

  imagePiyush = 'https://naturecanada.ca/wp-content/uploads/2015/09/Anne-Murray-Featured-Image.jpg';

  imageCover2 = 'https://naturecanada.ca/wp-content/uploads/2015/09/Anne-Murray-Featured-Image.jpg';

  imageCover3 = 'https://s3.ap-south-1.amazonaws.com/jambos/jambo_1509084764456.png';

  imageCover4 = 'https://s3.ap-south-1.amazonaws.com/jambos/jambo_1508913096813.png';

  imageCover5 = 'https://s3.ap-south-1.amazonaws.com/jambos/jambo_1509085011596.jpg';


  inputText2 = '<a (click)="getUserId(111)" style="cursor: pointer;color: #2196f3">@facebook</a> <span>&nbsp;<a (click)="getUserId(111)" style="cursor: pointer;color: #2196f3">@facebook</a> <span>&nbsp;</span></span>@angular/core: Critical runtime parts of the framework needed by every application. Includes all metadata decorators, Component, Directive, dependency injection, and the component lifecycle hooks.@angular/common: The commonly needed services, pipes, and directives provided by the Angular team.@angular/compiler: Angulars Template Compiler. It understands templates and can convert them to code that makes the application run and render. Typically you donâ??t interact with the compiler directly; rather, you use it indirectly via platform-browser-dynamic or the offline template compiler.@angular/platform-browser: Everything DOM and browser related, especially the pieces that help render into the DOM. This package also includes the bootstrapStatic() method for bootstrapping applications for production builds that pre-compile templates offline.@angular/platform-browser-dynamic: Includes Providers and a bootstrap method for applications that compile templates on the client. Donâ??t use offline compilation. Use this package for bootstrapping during development and for bootstrapping plunker samples.<a (click)="getUserId(111)" style="cursor: pointer;color: #2196f3">@facebook</a> <span>&nbsp;<a (click)="getUserId(111)" style="cursor: pointer;color: #2196f3">@facebook</a> <span>&nbsp;</span></span>@angular/core: Critical runtime parts of the framework needed by every application. Includes all metadata decorators, Component, Directive, dependency injection, and the component lifecycle hooks.@angular/common: The commonly needed services, pipes, and directives provided by the Angular team.@angular/compiler: Angulars Template Compiler. It understands templates and can convert them to code that makes the application run and render. Typically you donâ??t interact with the compiler directly; rather, you use it indirectly via platform-browser-dynamic or the offline template compiler.@angular/platform-browser: Everything DOM and browser related, especially the pieces that help render into the DOM. This package also includes the bootstrapStatic() method for bootstrapping applications for production builds that pre-compile templates offline.@angular/platform-browser-dynamic: Includes Providers and a bootstrap method for applications that compile templates on the client. Donâ??t use offline compilation. Use this package for bootstrapping during development and for bootstrapping plunker samples.';

  inputtextAll = '<div><p #textContent id="read-more" [text]="' + this.inputText2 + '"></p><div><a readMore [readMore-length]="' + this.returnLength(this.inputText2) + '" [readMore-element]="textContent"><span>Continue reading</span></a></div></div>';

  //inputText3 = '<div><p #textContent id="read-more" [text]="<a (click)="getUserId(111)" style="color: #2196f3">@facebook</a> <span>&nbsp;<a (click)="getUserId(111)" style="color: #2196f3">@facebook</a> <span>&nbsp;</span></span>@angular/core: Critical runtime parts of the framework needed by every application. Includes all metadata decorators, Component, Directive, dependency injection, and the component lifecycle hooks.@angular/common: The commonly needed services, pipes, and directives provided by the Angular team.@angular/compiler: Angulars Template Compiler. It understands templates and can convert them to code that makes the application run and render. Typically you donâ??t interact with the compiler directly; rather, you use it indirectly via platform-browser-dynamic or the offline template compiler.@angular/platform-browser: Everything DOM and browser related, especially the pieces that help render into the DOM. This package also includes the bootstrapStatic() method for bootstrapping applications for production builds that pre-compile templates offline.@angular/platform-browser-dynamic: Includes Providers and a bootstrap method for applications that compile templates on the client. Donâ??t use offline compilation. Use this package for bootstrapping during development and for bootstrapping plunker samples."></p><div><a readMore [readMore-length]="350" [readMore-element]="textContent"><span>Continue reading</span></a></div></div>';

  error = '<div><p #textContent id="read-more" [text]="<a (click)="getUserId(111)" style="cursor: pointer;color: #2196f3">@facebook</a> <span>&nbsp;<a (click)="getUserId(111)" style="cursor: pointer;color: #2196f3">@facebook</a> <span>&nbsp;</span></span>@angular/core: Critical runtime parts of the framework needed by every application. Includes all metadata decorators, Component, Directive, dependency injection, and the component lifecycle hooks.@angular/common: The commonly needed services, pipes, and directives provided by the Angular team.@angular/compiler: Angulars Template Compiler. It understands templates and can convert them to code that makes the application run and render. Typically you donâ??t interact with the compiler directly; rather, you use it indirectly via platform-browser-dynamic or the offline template compiler.@angular/platform-browser: Everything DOM and browser related, especially the pieces that help render into the DOM. This package also includes the bootstrapStatic() method for bootstrapping applications for production builds that pre-compile templates offline.@angular/platform-browser-dynamic: Includes Providers and a bootstrap method for applications that compile templates on the client. Donâ??t use offline compilation. Use this package for bootstrapping during development and for bootstrapping plunker samples."></p><div><a readMore [readMore-length]="50" [readMore-element]="textContent"><span>Continue reading</span></a></div></div>';

  finalInput = '<div> <p #textContent id="read-more" [innerHTML]="' + this.inputText2 + '"></p> <div class="readMore read-more-link"> <a readMore [readMore-length]="50" [readMore-element]="textContent"> <span class="more">Continue reading</span></a></div></div>';


  getDynamicContent() {
    return this.finalInput;
  }

  returnLength(input) {
    return input ? 50 : 150;
  }

  onTextChange(input) {
    console.log(input);
  }

  public tags1 = [];
  public autocompleteTags1 = [];
  public autocompleteItems1 = [
    'Banana',
    'Orange',
    'Apple',
    'Pear',
    'Grape',
    'Potato',
    'Peach'
  ];

  SkillSearch(text) {

  }

  public searchChanged(value) {
    console.log(value);
    // Make cool HTTP requests
  }

  searchControl = new FormControl();
  searchText = '';

  constructor(private ss: Sharedservice,
              private http: Http) {
    for (let i = 0; i < 4; i++) {
      this.addSlide();
    }

    /*this.searchControl.valueChanges
     .debounceTime(500)
     .subscribe(value => {
     this.searchText = value;
     this.search();
     });*/

   /* this.getResponse(new ApiResponse({
      onApiResponse(data) {
        console.log('interface response',data);
      }
    }));*/
  }

  search() {
    // send data
  }

  public requestAutocompleteItems = (text: string): Observable<Response> => {
    const url = `https://api.github.com/search/repositories?q=${text}`;
    return this.http
      .get(url)
      .map(data => data.json().items.map(item => item.full_name));
  };

  setAppSearchData(searchdata) {
    console.log(searchdata);
    this.ss.setSearchObserver(searchdata);
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
          let html = ' '+'<a (click)="getUserId(' + 111 + ')" style="color: #2196f3">';
          html += '@' + hit + '</a> ';
          return html;
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
          let html = ' '+'<a style="color: #2196f3">';
          html += '#' + hit + '</a> ';
          return html;
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
      footer: '<div></div>'
    });

  }

  ngOnInit() {
   // getUrl();
  }

  public getResponse(apiResponse:ApiResponse) {

    let s = 'string message';

    apiResponse.onApiResponse(s);
  }

  getUserId(id) {
    console.log(id);
    console.log('id');
  }


  messages: any = [];

  loading = false;
  total = 5;
  page = 1;
  limit = 1;

  goToPage(n: number): void {
    this.page = n;
    console.log(this.page);
    //this.getMessages();
  }

  onNext(): void {
    this.page++;
    console.log(this.page);
    //this.getMessages();
  }

  onPrev(): void {
    this.page--;
    console.log(this.page);
    //this.getMessages();
  }


  public myInterval: number = 0;
  public noWrapSlides: boolean = true;
  public slides: Array<any> = [];


  public addSlide(): void {
    let newWidth = 600 + this.slides.length + 1;
    this.slides.push({
      image: `//placekitten.com/${newWidth}/300`,
      text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
      ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
    });
  }

  public removeSlide(index: number): void {
    this.slides.splice(index, 1);
  }


  OnImageLoad(evt) {

    let img = evt.currentTarget;

    // what's the size of this image and it's parent
    let w = $(img).width();
    let h = $(img).height();
    let tw = $(img).parent().width();
    let th = $(img).parent().height();

    // compute the new size and offsets
    let result = this.ScaleImage(w, h, tw, th, false);

    // adjust the image coordinates and size
    img.width = result.width;
    img.height = result.height;
    $(img).css("left", result.targetleft);
    $(img).css("top", result.targettop);
  }

  ScaleImage(srcwidth, srcheight, targetwidth, targetheight, fLetterBox) {

    let result = {width: 0, height: 0, targetleft: 0, targettop: 0, fScaleToTargetWidth: true};

    if ((srcwidth <= 0) || (srcheight <= 0) || (targetwidth <= 0) || (targetheight <= 0)) {
      return result;
    }

    // scale to the target width
    let scaleX1 = targetwidth;
    let scaleY1 = (srcheight * targetwidth) / srcwidth;

    // scale to the target height
    let scaleX2 = (srcwidth * targetheight) / srcheight;
    let scaleY2 = targetheight;

    // now figure out which one we should use
    let fScaleOnWidth = (scaleX2 > targetwidth);
    if (fScaleOnWidth) {
      fScaleOnWidth = fLetterBox;
    }
    else {
      fScaleOnWidth = !fLetterBox;
    }

    if (fScaleOnWidth) {
      result.width = Math.floor(scaleX1);
      result.height = Math.floor(scaleY1);
      result.fScaleToTargetWidth = true;
    }
    else {
      result.width = Math.floor(scaleX2);
      result.height = Math.floor(scaleY2);
      result.fScaleToTargetWidth = false;
    }
    result.targetleft = Math.floor((targetwidth - result.width) / 2);
    result.targettop = Math.floor((targetheight - result.height) / 2);

    return result;
  }


}

function getUrl() {
  /*const urlMetadata = require('url-metadata')
  urlMetadata('https://www.bonoboz.in/').then(
    function (metadata) { // success handler
      console.log('metadata',metadata)
    },
    function (error) { // failure handler
      console.log(error)
    })*/
}

