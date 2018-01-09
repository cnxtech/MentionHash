import {AfterViewInit, Component, OnInit, Renderer2, ViewChild} from "@angular/core";
import * as $ from "jquery";
import "../assets/jquery.textcomplete.min.js";
import '../assets/jquery.datepair.min.js';
import {Sharedservice} from "./mark/sharedservice.service";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {FormControl} from "@angular/forms";
import {ApiResponse} from "./interfaces/api-response";
import {SearchService} from "./services/search.service";
import {isNullOrUndefined} from "util";
import {ImgCacheService} from "ng-imgcache";
import {UploadEvent, UploadFile} from "ngx-file-drop";
import {BaseChartDirective} from "ng2-charts";

//declare let $: any;
// import * as mData from "../../node_modules/url-metadata/index.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  timeStart:string;
  dateStart:string;

  timeEnd:string;
  dateEnd:string;

  rangeError: any;
  rangeIncomplete: any
  rangeSelected: any;


  timeT:string;
  dateS:string;

  startDate1: Date = new Date();

  inputText = '<a #mention data-value="facebook" style="color: #2196f3">@facebook</a>&nbsp; <a #hashtag style="color: #2196f3" data-value="facebook">#facebook</a>&nbsp;';

  title = 'PP';
  searchTermhe = 'test';

  defaultImage: string;


  isLoad: boolean = true;

  setLoad(event) {
    setTimeout(()=> {
      this.isLoad = event;
    },1);
  }

  image1 = 'https://s3.ap-south-1.amazonaws.com/jambos/jambo_1508996553924.png';

  imagePortrait2 = 'http://www.logcollectionhotels.co.za/press/graywoodsignature_big.jpg'; //'https://s3.ap-south-1.amazonaws.com/jambos/jambo_1509088470342.jpg';

  imagecover = 'https://naturecanada.ca/wp-content/uploads/2015/11/field-858650_1280-940x300.png';

  imagePortrait = 'https://i.pinimg.com/736x/5a/e9/50/5ae9501fc3b49810db7901873f77d6f7--beautiful-nature-photos-beautiful-days.jpg';

  imageBig = 'http://www.hdwallpapery.com/static/images/high-resolution-nature-wallpaper.jpg';

  imagePiyush = 'https://naturecanada.ca/wp-content/uploads/2015/09/Anne-Murray-Featured-Image.jpg';

  imageCover2 = 'https://naturecanada.ca/wp-content/uploads/2015/09/Anne-Murray-Featured-Image.jpg';

  imageCover3 = 'https://s3.ap-south-1.amazonaws.com/jambos/jambo_1509084764456.png';

  imageCover4 = 'https://s3.ap-south-1.amazonaws.com/jambos/jambo_1508913096813.png';

  imageCover5 = 'https://s3.ap-south-1.amazonaws.com/jambos/jambo_1509085011596.jpg';


  inputText2 = '<a (click)="getUserId(111)" data="@facebook" style="cursor: pointer;color: #2196f3">@facebook</a> <span>&nbsp;<a (click)="getUserId(111)" style="cursor: pointer;color: #2196f3">@facebook</a> <span>&nbsp;</span></span>@angular/core: Critical runtime parts of the framework needed by every application. Includes all metadata decorators, Component, Directive, dependency injection, and the component lifecycle hooks.@angular/common: The commonly needed services, pipes, and directives provided by the Angular team.@angular/compiler: Angulars Template Compiler. It understands templates and can convert them to code that makes the application run and render. Typically you donâ??t interact with the compiler directly; rather, you use it indirectly via platform-browser-dynamic or the offline template compiler.@angular/platform-browser: Everything DOM and browser related, especially the pieces that help render into the DOM. This package also includes the bootstrapStatic() method for bootstrapping applications for production builds that pre-compile templates offline.@angular/platform-browser-dynamic: Includes Providers and a bootstrap method for applications that compile templates on the client. Donâ??t use offline compilation. Use this package for bootstrapping during development and for bootstrapping plunker samples.<a (click)="getUserId(111)" style="cursor: pointer;color: #2196f3">@facebook</a> <span>&nbsp;<a (click)="getUserId(111)" style="cursor: pointer;color: #2196f3">@facebook</a> <span>&nbsp;</span></span>@angular/core: Critical runtime parts of the framework needed by every application. Includes all metadata decorators, Component, Directive, dependency injection, and the component lifecycle hooks.@angular/common: The commonly needed services, pipes, and directives provided by the Angular team.@angular/compiler: Angulars Template Compiler. It understands templates and can convert them to code that makes the application run and render. Typically you donâ??t interact with the compiler directly; rather, you use it indirectly via platform-browser-dynamic or the offline template compiler.@angular/platform-browser: Everything DOM and browser related, especially the pieces that help render into the DOM. This package also includes the bootstrapStatic() method for bootstrapping applications for production builds that pre-compile templates offline.@angular/platform-browser-dynamic: Includes Providers and a bootstrap method for applications that compile templates on the client. Donâ??t use offline compilation. Use this package for bootstrapping during development and for bootstrapping plunker samples.';

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

  private loadingS: boolean = false;

  @ViewChild('mention') mention;
  @ViewChild('hashtag') hashtag;



  constructor(private ss: Sharedservice,
              private itunes: SearchService,
              private http: Http,
              private renderer: Renderer2,
              private imgCache: ImgCacheService) {

    // Ensure you init once the platform is ready.
    imgCache.init({
      // Pass any options here...
      debug: true,
      usePersistentCache: true
    });

    this.defaultImage = '../../assets/no-image-placeholder.png';

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

  doSearch(term: string) {
    console.log('term',term);
    if(!isNullOrUndefined(term)) {
      this.loadingS = true;
      this.itunes.search(term).then(_ => this.loadingS = false);
    }
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
          let html = ' '+'<a #mention data-value="'+hit+'" style="color: #2196f3">';
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
          let html = ' '+'<a #hashtag style="color: #2196f3" data-value="'+hit+'">';
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

    /*$("#mention").click(function(event){
      console.log(event.data);
      console.log($(this).data("data-value"));
    });

    $("#hashtag").click(function(event){
      console.log(event);
      console.log($(this).data("data-value"));
    });*/

    let global = this.renderer.listen('document', 'click', (evt) => {
      console.log('Clicking the document', evt);
      console.log('Clicking the document', evt.srcElement.dataset.value);
      console.log('Clicking the innerHTML', evt.srcElement.innerHTML);
      console.log('Clicking the innerText', evt.srcElement.innerText);

      let values = evt.srcElement.innerHTML;
      if(values.startsWith('@')) {
        console.log('Clicking the document', evt.srcElement.attributes.data.value);
      } else if(values.startsWith('#')){
        // hashtag
        console.log('hashtag')
      }
    });
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

  onPaste(e) {
    let content;
    e.preventDefault();

    if( e.clipboardData ){
      content = e.clipboardData.getData('text/plain');
      document.execCommand('insertText', false, content);
      return false;
    }
    else if( e.clipboardData ){
      content = e.clipboardData.getData('Text');
      if (window.getSelection)
        window.getSelection().getRangeAt(0).insertNode( document.createTextNode(content) );
    }

   // this.inputText = this.inputText+' '+content;
  }


   onKeyUp(e,content_id) {
   console.log('keyup', e);
   console.log('keyup', $('#'+content_id).text());
   console.log('keyup', $('#'+content_id).text().length);
   }

   onKeyDown(e,content_id) {
    e.prev
   console.log('keydown', e);
   console.log('keydown', $('#'+content_id).text());
   console.log('keydown', $('#'+content_id).text().length);
   }

  isPostButtonVisible(isvalid) {
    console.log('isvalid',isvalid);
  }

  public files: UploadFile[] = [];

  public dropped(event: UploadEvent) {
    this.files = event.files;
    for (var file of event.files) {
      file.fileEntry.file(info => {
        console.log(info);
      });
    }
  }

  public fileOver(event){
    console.log(event);
  }

  public fileLeave(event){
    console.log(event);
  }


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40 ,55,65, 59, 80, 81], label: 'Money'},
    {data: [28, 48, 40, 19, 86, 27, 90,35,28, 48, 40, 19], label: 'Members'}
  ];

  public barChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgb(33,150,243)',
      borderColor: 'rgb(14,141,242)',
      pointBackgroundColor: 'rgb(14,141,242)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(14,141,242)'
    },
    { // dark grey
      backgroundColor: 'rgb(237,239,240)',
      borderColor: 'rgb(237,239,240)',
      pointBackgroundColor: 'rgb(237,239,240)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(237,239,240)'
    }
  ];
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values

    let random = Math.round(Math.random() * 12);
    console.log('random',random);
    let data;
    let lable;
    if(random === 0 || random === 1) {
      data = [Math.round(Math.random() * 100)];
      lable = ['Jan'];
    } else if(random === 2) {
      data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];

      lable = ['Jan', 'Feb'];
    } else if(random === 3) {
      data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];

      lable = ['Jan', 'Feb', 'Mar'];
    } else if(random === 4) {
      data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];

      lable = ['Jan', 'Feb', 'Mar', 'Apr'];
    } else if(random === 5) {
      data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];

      lable = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
    } else if(random === 6) {
      data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];

      lable = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    } else if(random === 7) {
      data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];

      lable = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    } else if(random === 8) {
      data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];

      lable = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug'];
    } else if(random === 9) {
      data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];

      lable = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep'];
    } else if(random === 10) {
      data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];

      lable = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct'];
    } else if(random === 11) {
      data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];

      lable = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov'];
    } else if(random === 12) {
      data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];

      lable = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec'];
    }

    /*let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;*/

    /*let cloneLable = JSON.parse(JSON.stringify(this.barChartLabels));
    cloneLable.barChartLabels = lable;
    this.barChartLabels = cloneLable;*/

    this.barChartLabels = [];
    this.barChartLabels = lable;


    this.barChartData = [];

    this.barChartData = [
      {data: data, label: 'Money'},
      {data: data, label: 'Members'}
    ];

    /*let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;*/

    this.chart.chart.config.data.labels = this.barChartLabels;
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

