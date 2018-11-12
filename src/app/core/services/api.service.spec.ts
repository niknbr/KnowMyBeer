import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from '../core.module';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      providers: [ApiService],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
