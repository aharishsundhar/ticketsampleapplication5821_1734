import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltypesComponent } from './alltypes.component';

describe('AlltypesComponent', () => {
  let component: AlltypesComponent;
  let fixture: ComponentFixture<AlltypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});