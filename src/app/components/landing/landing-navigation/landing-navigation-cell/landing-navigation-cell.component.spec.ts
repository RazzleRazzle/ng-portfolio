import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavigationCellComponent } from './landing-navigation-cell.component';

describe('LandingNavigationCellComponent', () => {
  let component: LandingNavigationCellComponent;
  let fixture: ComponentFixture<LandingNavigationCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingNavigationCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingNavigationCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
