/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface JQuery {
  addClass(className: string): JQuery;
  attr(attributeName: string, value: string | number): JQuery;
}

interface JQuery {
  textcomplete(options?: any[], callback?: any): any;
  textcomplete(destory?: any): any;
}

interface JQuery {
  mark(keywork: any, options: any[]): any;
  markRegExp(keywork: any, options: any[]): any;
  markRanges(ranges: any, options: any[]): any;
  unmark(options: any[]): any;
}

interface JQuery {
  autocomplete(keyword: any, options: any[]);
}

interface JQuery {
  tokenInput(options?: any);
}


interface Strategy {
  // Required
  match: RegExp,
  search: any,
  replace: any,

  // Optional                 // Default
  index: number,    // 2
  template: any,   // function (value) { return value; }
  cache: boolean,   // false
  context: Function,    // function (text) { return true; }
  idProperty: string   // null
}

interface Option {
  appendTo: Element, // $('body')
  height: number,    // undefined
  maxCount: number,  // 10
  placement: string,    // ''
  header: any, // undefined
  footer: any, // undefined
  zIndex: string,       // '100'
  debounce: number,  // undefined
  adapter: any,    // undefined
  className: string,    // ''
  onKeydown: Function,   // undefined
  noResultsMessage: Function  // undefined
}


