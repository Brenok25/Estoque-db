import { TestBed } from '@angular/core/testing';

import { ProdutosServService } from './produtos-serv.service';

describe('ProdutosServService', () => {
  let service: ProdutosServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
