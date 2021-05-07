import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedticketComponent } from './addedticket.component';

describe('AddedticketComponent', () => {
  let component: AddedticketComponent;
  let fixture: ComponentFixture<AddedticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});