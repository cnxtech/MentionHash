import {Directive, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, Renderer} from "@angular/core";
import {ControlValueAccessor, NgModel} from "@angular/forms";
import * as $ from "jquery";
import "../../assets/bootstrap-datepicker.min.js";

@Directive({
  selector: '[datePicker][ngControl],[datePicker][ngFormControl],[datePicker][ngModel]',
  host: {
    '(change)': 'onChange($event.target.value)', '(blur)': 'onChange($event.target.value)'
  }
})
export class DatepickerDirective implements ControlValueAccessor, OnChanges, OnDestroy {


  @Input()
  optionsDate: DatepickerOptions;

  @Output()
  show: EventEmitter<Object> = new EventEmitter();
  @Output()
  hide: EventEmitter<Object> = new EventEmitter();
  @Output()
  clearDate: EventEmitter<Object> = new EventEmitter();
  @Output()
  changeDate: EventEmitter<Object> = new EventEmitter();
  @Output()
  changeMonth: EventEmitter<Object> = new EventEmitter();
  @Output()
  changeYear: EventEmitter<Object> = new EventEmitter();
  @Output()
  changeDecade: EventEmitter<Object> = new EventEmitter();
  @Output()
  changeCentury: EventEmitter<Object> = new EventEmitter();

  ngOnChanges(): any {
    var self = this;
    let el = $(this._elementRef.nativeElement);
    // Unbinding if datepicker present
    //el.datepicker('destroy');
    el.datepicker(this.optionsDate);

    el.on('show', function (event: Object) {
      self.show.emit(event);
    });

    el.on('hide', function (event: Object) {
      self.hide.emit(event);
    });

    el.on('clearDate', function (event: Object) {
      self.onUpdate(event);
      self.clearDate.emit(event);
    });

    el.on('changeDate', function (event: Object) {
      self.onUpdate(event);
      self.changeDate.emit(event);
    });

    el.on('changeMonth', function (event: Object) {
      self.onUpdate(event);
      self.changeMonth.emit(event);
    });

    el.on('changeYear', function (event: Object) {
      self.onUpdate(event);
      self.changeYear.emit(event);
    });

    el.on('changeDecade', function (event: Object) {
      self.onUpdate(event);
      self.changeDecade.emit(event);
    });

    el.on('changeCentury', function (event: Object) {
      self.onUpdate(event);
      self.changeCentury.emit(event);
    });
  }

  onChange = (_: any) => {
  };

  onTouched = () => {
  };

  constructor(private _renderer: Renderer, private _elementRef: ElementRef, private _ngModel: NgModel) {

  }

  private onUpdate(event: any) {
    let value = this._elementRef.nativeElement.value;
    this.writeValue(value);
    this._ngModel.viewToModelUpdate(value);
    this._elementRef.nativeElement.dispatchEvent(new Event('change', {bubbles: true}));
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

  ngOnDestroy() {
    $(this._elementRef.nativeElement).datepicker('destroy');
  }

}

class DatepickerOptions {
  format: string;
  weekStart: number;
  startDate: Date;
  endDate: Date;
  autoclose: boolean;
  startView: number;
  todayBtn: boolean;
  todayHighlight: boolean;
  keyboardNavigation: boolean;
  language: string;
}
