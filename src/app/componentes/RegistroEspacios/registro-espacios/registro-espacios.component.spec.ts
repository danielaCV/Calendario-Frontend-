import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEspaciosComponent } from './registro-espacios.component';

describe('RegistroEspaciosComponent', () => {
  let component: RegistroEspaciosComponent;
  let fixture: ComponentFixture<RegistroEspaciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEspaciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
