import { Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import anime from 'animejs';

@Injectable()
export class LandingNavigationAnimationService {
  private start:Date;

  constructor() { }

  public animateUpper = () => {
    const _animateMouse = this.animateMouse;
    const timeline = anime.timeline();
    timeline
    .add({
      targets: '.img--container',
      translateY: "-70vh",
      easing: "easeInQuart",
    })
    .add({
      targets: '.img--container',
      opacity:1,
      offset: "-=300"
    })
    .add({
      targets: '.name--visible',
      translateY: "4vh",
      easing: "easeInQuad"
    })
    // .add({
    //   targets: '.name--visible',
    //   translateY: "8vh",
    //   easing: "easeInQuad",
    //   offset: "+=800",
    //   duration: 400,
    //   opacity: 0.4
    // })
    .add({
      targets: '.instruction--visible',
      translateY: "4vh",
      easing: "easeInQuad",
      complete: () => {
        _animateMouse();
      }
    })

  };

  public animateMouse = () => {
    // const fill = anime({
    //   targets: [".img--container"],
    //   translateY: "50px",
    //   duration: 500,
    //   autoplay: false,
    //   easing: "easeInQuad",
    //   update: function(anim) {
    //     console.log(anim.progress)
    //   }
    // })
    //
    // const mouseDown = document.body.addEventListener('mousedown', (e) => {
    //   console.log(e)
    //   fill.play()
    // })
    // const mouseUp = document.body.addEventListener('mouseup', (e) => {
    //   console.log(e)
    //   fill.pause()
    //   fill.restart()
    // })
  };

  private setTimer = () => {
    // later record end time
    // var endTime = new Date();
    // // time difference in ms
    // var timeDiff = endTime - this.startTime;
    // // strip the miliseconds
    // timeDiff /= 1000;
    // // get seconds
    // var seconds = Math.round(timeDiff % 60);
    // // remove seconds from the date
    // timeDiff = Math.floor(timeDiff / 60);
    // // get minutes
    // var minutes = Math.round(timeDiff % 60);
    // // remove minutes from the date
    // timeDiff = Math.floor(timeDiff / 60);
    // // get hours
    // var hours = Math.round(timeDiff % 24);
    // // remove hours from the date
    // timeDiff = Math.floor(timeDiff / 24);
    // // the rest of timeDiff is number of days
    // var days = timeDiff;
    // $(".time").text(days + " days, " + hours + ":" + minutes + ":" + seconds);
    // setTimeout(display, 1000);
  }





  // $("input#button").click(function () {
  //     startTime = new Date();
  //     setTimeout(display, 1000);
  // });


}
