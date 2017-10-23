import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'emitter-click',
  templateUrl: './event-emitter-click-component.component.html',
  styleUrls: ['./event-emitter-click-component.component.css']
})
export class EventEmitterClickComponent {


  @Output() eventEmitterClick = new EventEmitter();

  eventEmitClick(event) {
    this.eventEmitterClick.emit(event);
  }

}
