import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentionHashtagComponent } from './mention-hashtag.component';

describe('MentionHashtagComponent', () => {
  let component: MentionHashtagComponent;
  let fixture: ComponentFixture<MentionHashtagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionHashtagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionHashtagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
