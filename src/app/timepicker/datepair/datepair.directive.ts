import {Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer} from '@angular/core';
import {ControlValueAccessor, NgModel} from "@angular/forms";

import * as $ from "jquery";
import '../../../assets/jquery.datepair.min.js';

@Directive({
  selector: '[datePair][ngControl],[datePair][ngFormControl],[datePair][ngModel]',
  host: {
    '(change)': 'onChange($event.target.value)', '(blur)': 'onChange($event.target.value)'
  }
})
export class DatepairDirective implements ControlValueAccessor,OnInit, OnChanges{


  @Input()
  optionsPair: DatePairConfig;

  @Output()
  rangeError: EventEmitter<Object> = new EventEmitter();
  @Output()
  rangeIncomplete: EventEmitter<Object> = new EventEmitter();
  @Output()
  rangeSelected: EventEmitter<Object> = new EventEmitter();

  constructor(private _renderer: Renderer,
              private _elementRef: ElementRef,
              private _ngModel: NgModel) {

  }

  ngOnInit(): void {
    var self = this;
    let el = $(this._elementRef.nativeElement);
    // Unbinding if datepicker present
    //  el.datepair('remove');
    el.datepair(this.optionsPair);

    el.on('rangeError', function (event: Object) {
      self.onUpdate(event);
      self.rangeError.emit(event);
    });

    el.on('rangeIncomplete', function (event: Object) {
      self.onUpdate(event);
      self.rangeIncomplete.emit(event);
    });

    el.on('rangeSelected', function (event: Object) {
      self.onUpdate(event);
      self.rangeSelected.emit(event);
    });
  }

  ngOnChanges() {

  }

  onChange = (_: any) => {
  };

  onTouched = () => {
  };

  private onUpdate(event: any) {
    let value = this._elementRef.nativeElement.value;
    this.writeValue(value);
    this._ngModel.viewToModelUpdate(value);
    this._elementRef.nativeElement.dispatchEvent(new Event('change', {bubbles: true}));
    $(this._elementRef.nativeElement).datepair('refresh');
  }

  writeValue(value: any): void {
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', value);
  }

  registerOnChange(fn: () => any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

}

class DatePairConfig {
  /*The input that will control the other input. One of "start", "end", or null. See demo page for more information.
   default: "start"*/
  anchor: string;

  /*Class name of the date inputs, if any.
   default: "date"*/
  dateClass: any;

  /*Fill in the second date value with the specified range when the users selects the first date.
   Value is in days. Set this to null to disable automatically setting the second date.
   default: 0*/
  defaultDateDelta: any;

  /*Fill in the second time value with the specified range when the users selects the first time.
   Value is in milliseconds;
   set this to 7200000 for a 2 hour range, for example. Set this to null to disable automatically setting the second time.
   default: 0*/
  defaultTimeDelta: any;

  /*Class name of the range end input(s).
   default: "end"*/
  endClass: any;

  /*A function that takes a jQuery element for a date input and returns a local time Date object representing the date input value.
   default: function for Bootstrap Datepicker*/
  parseDate: any;

  /*A function that takes a jQuery element for a time input and returns a local time Date object representing the time input value.
   See example page for more info.
   default: function for jquery-timepicker*/
  parseTime: any;

  /*A function that takes a jQuery element for a time input and a local time Date object representing the time,
   and sets the timepicker minTime value.
   default: function for jquery-timepicker*/
  setMinTime: Function;

  /*Class name of the range start input(s).
   default: "start"*/
  startClass: any;

  /*Class name of the time inputs, if any.
   default: "time"*/
  timeClass: any;

  /*A function that takes a jQuery element for a date input and a local time Date object representing the date,
   and sets the input value.
   default: function for Bootstrap Datepicker*/
  updateDate: Function;

  /*A function that takes a jQuery element for a time input and a local time Date object representing the time,
   and sets the input value.
   default: function for jquery-timepicker*/
  updateTime: Function;
}
