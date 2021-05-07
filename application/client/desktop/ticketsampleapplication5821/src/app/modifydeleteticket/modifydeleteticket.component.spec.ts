import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifydeleteticketComponent } from './modifydeleteticket.component';

describe('ModifydeleteticketComponent', () => {
  let component: ModifydeleteticketComponent;
  let fixture: ComponentFixture<ModifydeleteticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifydeleteticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifydeleteticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});