import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarComponent } from './lugar.component';

describe('LugarComponent', () => {
  let component: LugarComponent;
  let fixture: ComponentFixture<LugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugarComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
