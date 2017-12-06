import { TestBed, inject } from '@angular/core/testing';

import { LandingNavigationAnimationService } from './landing-navigation-animation.service';

describe('LandingNavigationAnimationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LandingNavigationAnimationService]
    });
  });

  it('should be created', inject([LandingNavigationAnimationService], (service: LandingNavigationAnimationService) => {
    expect(service).toBeTruthy();
  }));
});
