import { TestBed, inject } from '@angular/core/testing';

import { ThreeJsService } from './three-js.service';

describe('ThreeJsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreeJsService]
    });
  });

  it('should be created', inject([ThreeJsService], (service: ThreeJsService) => {
    expect(service).toBeTruthy();
  }));
});
