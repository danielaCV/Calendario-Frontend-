import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionFechaComponent } from './asignacion-fecha.component';

describe('AsignacionFechaComponent', () => {
  let component: AsignacionFechaComponent;
  let fixture: ComponentFixture<AsignacionFechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
