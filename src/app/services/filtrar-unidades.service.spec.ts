import { TestBed } from '@angular/core/testing';

import { FiltrarUnidadesService } from './filtrar-unidades.service';

describe('FiltrarUnidadesService', () => {
  let service: FiltrarUnidadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltrarUnidadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
