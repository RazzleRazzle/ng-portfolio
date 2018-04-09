import { TestBed, inject } from '@angular/core/testing';

import { HomeCanvasService } from './home-canvas.service';

describe('HomeCanvasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeCanvasService]
    });
  });

  it('should be created', inject([HomeCanvasService], (service: HomeCanvasService) => {
    expect(service).toBeTruthy();
  }));
});
