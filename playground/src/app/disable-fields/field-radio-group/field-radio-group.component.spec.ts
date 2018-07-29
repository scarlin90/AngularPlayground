import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldRadioGroupComponent } from './field-radio-group.component';

describe('FieldRadioGroupComponent', () => {
  let component: FieldRadioGroupComponent;
  let fixture: ComponentFixture<FieldRadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldRadioGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
