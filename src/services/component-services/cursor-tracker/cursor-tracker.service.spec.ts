import { TestBed, inject } from '@angular/core/testing';

import { CursorTrackerService } from './cursor-tracker.service';

describe('CursorTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursorTrackerService]
    });
  });

  it('should be created', inject([CursorTrackerService], (service: CursorTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
