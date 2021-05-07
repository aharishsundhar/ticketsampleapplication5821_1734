import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllseverityComponent } from './allseverity.component';

describe('AllseverityComponent', () => {
  let component: AllseverityComponent;
  let fixture: ComponentFixture<AllseverityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllseverityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllseverityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});