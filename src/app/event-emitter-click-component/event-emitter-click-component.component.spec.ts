import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterClickComponent } from './event-emitter-click-component.component';

describe('EventEmitterClickComponent', () => {
  let component: EventEmitterClickComponent;
  let fixture: ComponentFixture<EventEmitterClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmitterClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
