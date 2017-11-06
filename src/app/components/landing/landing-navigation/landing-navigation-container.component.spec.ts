import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavigationContainerComponent } from './landing-navigation-container.component';

describe('LandingNavigationContainerComponent', () => {
  let component: LandingNavigationContainerComponent;
  let fixture: ComponentFixture<LandingNavigationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingNavigationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingNavigationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
