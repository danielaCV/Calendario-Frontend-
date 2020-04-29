import { TestBed } from '@angular/core/testing';

import { ServCalendarioService } from './serv-calendario.service';

describe('ServCalendarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServCalendarioService = TestBed.get(ServCalendarioService);
    expect(service).toBeTruthy();
  });
});
