import { TestBed, inject } from '@angular/core/testing';

import { BeerService } from './beer.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiService } from './api.service';
import { CoreModule } from '../core.module';

describe('BeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [BeerService],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should be created', inject([BeerService], (service: BeerService) => {
    expect(service).toBeTruthy();
  }));
});
