import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingPageContainerComponent } from './painting-page-container.component';

describe('PaintingPageContainerComponent', () => {
  let component: PaintingPageContainerComponent;
  let fixture: ComponentFixture<PaintingPageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaintingPageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaintingPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
