import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsticketComponent } from './allsticket.component';

describe('AllsticketComponent', () => {
  let component: AllsticketComponent;
  let fixture: ComponentFixture<AllsticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});