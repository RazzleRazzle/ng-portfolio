import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavigationToggleComponent } from './landing-navigation-toggle.component';

describe('LandingNavigationToggleComponent', () => {
  let component: LandingNavigationToggleComponent;
  let fixture: ComponentFixture<LandingNavigationToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingNavigationToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingNavigationToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
