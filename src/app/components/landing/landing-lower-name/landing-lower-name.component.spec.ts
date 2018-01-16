import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLowerNameComponent } from './landing-lower-name.component';

describe('LandingLowerNameComponent', () => {
  let component: LandingLowerNameComponent;
  let fixture: ComponentFixture<LandingLowerNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingLowerNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingLowerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
