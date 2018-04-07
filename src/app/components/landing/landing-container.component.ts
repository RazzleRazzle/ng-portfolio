import { Component, OnInit } from '@angular/core';
import {ThreeJsService} from '../../../services/three-services/three-js.service';
import {LandingNavigationAnimationService} from '../../../services/component-services/landing-navigation-services/landing-navigation-animation.service';
import {CursorTrackerService} from '../../../services/component-services/cursor-tracker/cursor-tracker.service';
import _ from "lodash";

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.scss']
})
export class LandingContainerComponent implements OnInit {
  private navigationActive: boolean = false;
  private gridCells: Array<number>;

  constructor(
    private three: ThreeJsService,
    private animation: LandingNavigationAnimationService,
    private cursor:CursorTrackerService
  ) { }

  ngOnInit() {
    this.cursor.track();
  }

  ngAfterViewInit() {
    this.animation.animateUpper();
  }
}
