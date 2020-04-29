import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEvaluadoresComponent } from './consulta-evaluadores.component';

describe('ConsultaEvaluadoresComponent', () => {
  let component: ConsultaEvaluadoresComponent;
  let fixture: ComponentFixture<ConsultaEvaluadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEvaluadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEvaluadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
