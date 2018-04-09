import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographViewComponent } from './photograph-view.component';

describe('PhotographViewComponent', () => {
  let component: PhotographViewComponent;
  let fixture: ComponentFixture<PhotographViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
