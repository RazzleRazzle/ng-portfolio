import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingUpperNameComponent } from './landing-upper-name.component';

describe('LandingUpperNameComponent', () => {
  let component: LandingUpperNameComponent;
  let fixture: ComponentFixture<LandingUpperNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingUpperNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingUpperNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
