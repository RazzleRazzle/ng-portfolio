import { Injectable } from '@angular/core';
import anime from 'animejs';

@Injectable()
export class ScrollTrackerService {
  private timer:number;
  private anim:any;

  constructor() { }

  private onDown = ($event:Event) => {
    var path = anime.path('#l');
    this.anim = anime({
      targets: ".green",
      translateX: path('x').totalLength,
      loop: true,
      easing: 'linear'
    });
  };

  private onRelease = ($event:Event) => {
    this.anim.pause()
  };
}
