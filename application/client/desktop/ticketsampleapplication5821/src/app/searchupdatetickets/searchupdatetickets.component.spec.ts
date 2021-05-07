import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchupdateticketsComponent } from './searchupdatetickets.component';

describe('SearchupdateticketsComponent', () => {
  let component: SearchupdateticketsComponent;
  let fixture: ComponentFixture<SearchupdateticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchupdateticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchupdateticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});