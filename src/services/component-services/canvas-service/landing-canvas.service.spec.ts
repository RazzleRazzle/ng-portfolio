import { TestBed, inject } from '@angular/core/testing';

import { LandingCanvasService } from './landing-canvas.service';

describe('LandingCanvasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandingCanvasService]
    });
  });

  it('should be created', inject([LandingCanvasService], (service: LandingCanvasService) => {
    expect(service).toBeTruthy();
  }));
});
