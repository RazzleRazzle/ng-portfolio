import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingEdgeComponent } from './landing-edge.component';

describe('LandingEdgeComponent', () => {
  let component: LandingEdgeComponent;
  let fixture: ComponentFixture<LandingEdgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingEdgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingEdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
