import { TestBed } from '@angular/core/testing';

import { WordSupplierService } from './word-supplier.service';

describe('WordSupplierService', () => {
  let service: WordSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
