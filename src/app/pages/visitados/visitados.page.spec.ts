import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitadosPage } from './visitados.page';

describe('VisitadosPage', () => {
  let component: VisitadosPage;
  let fixture: ComponentFixture<VisitadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
