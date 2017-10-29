import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavigationControllerComponent } from './landing-navigation-controller.component';

describe('LandingNavigationControllerComponent', () => {
  let component: LandingNavigationControllerComponent;
  let fixture: ComponentFixture<LandingNavigationControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingNavigationControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingNavigationControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
