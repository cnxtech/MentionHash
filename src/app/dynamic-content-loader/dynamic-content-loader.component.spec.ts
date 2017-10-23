import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicContentLoaderComponent } from './dynamic-content-loader.component';

describe('DynamicContentLoaderComponent', () => {
  let component: DynamicContentLoaderComponent;
  let fixture: ComponentFixture<DynamicContentLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicContentLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicContentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
