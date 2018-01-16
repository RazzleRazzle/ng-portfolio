import { Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import anime from 'animejs';

@Injectable()
export class LandingNavigationAnimationService {
  // private bodySubject: BehaviorSubject<any> = new BehaviorSubject(this.currentPage);
  // private bodyObservable = this.bodySubject.asObservable();

  constructor() { }

  public animateUpper = () => {
    console.log('animating 2');
    anime({
      targets: '.landing-upper',
      translateY: 250,
    })
  }

}
