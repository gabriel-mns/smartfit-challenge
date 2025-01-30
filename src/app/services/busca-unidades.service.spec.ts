import { TestBed } from '@angular/core/testing';

import { UnidadeService } from './busca-unidades.service';

describe('BuscaUnidadesService', () => {
  let service: UnidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
