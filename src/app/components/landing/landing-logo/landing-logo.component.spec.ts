import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLogoComponent } from './landing-logo.component';

describe('LandingLogoComponent', () => {
  let component: LandingLogoComponent;
  let fixture: ComponentFixture<LandingLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
