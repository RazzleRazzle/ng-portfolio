import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingImageComponent } from './landing-image.component';

describe('LandingImageComponent', () => {
  let component: LandingImageComponent;
  let fixture: ComponentFixture<LandingImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
