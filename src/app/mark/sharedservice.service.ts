import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class Sharedservice {

  constructor() { }

  @Output() private _searchObserver: EventEmitter<any> = new EventEmitter();

  getSearchObserver() {
    return this._searchObserver;
  }

  setSearchObserver(value:any) {
    this._searchObserver.emit(value);
  }

}
