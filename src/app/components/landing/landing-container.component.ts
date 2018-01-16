import { Component, OnInit } from '@angular/core';
import {ThreeJsService} from '../../../services/three-services/three-js.service';
import {LandingNavigationAnimationService} from '../../../services/component-services/landing-navigation-services/landing-navigation-animation.service';

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.scss']
})
export class LandingContainerComponent implements OnInit {
  private navigationActive: boolean = false;

  constructor(
    private three: ThreeJsService,
    private animation: LandingNavigationAnimationService
  ) { }

  ngOnInit() {}

  private getToggle = (event) => {
    this.navigationActive = !this.navigationActive;
  }

  private animate = () => {
    console.log('animating 1');
    this.animation.animateUpper();
  }

}
