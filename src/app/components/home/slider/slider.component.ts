import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var lineDrawing = anime({
        targets: ['#nav-circle-guide #Oval-2'],
         strokeDashoffset: [anime.setDashoffset, 0],
         easing: 'easeInOutSine',
         duration: 1500,
         delay: function(el, i) { return i * 250 },
         direction: 'alternate',
         loop: true
      });
  }

}
