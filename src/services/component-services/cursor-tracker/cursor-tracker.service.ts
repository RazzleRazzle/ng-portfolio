import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Injectable()
export class CursorTrackerService {

  constructor() { }

  public track = () => {
    // const circle = document.createElement('div');
    // const bound = circle.getBoundingClientRect();
    // circle.style.height = '20px';
    // circle.style.width = '20px';
    // circle.style.border = "1px solid white";
    // circle.style.borderRadius = "50%";
    // circle.style.position = 'absolute';
    // circle.style.top = "0px";
    // circle.style.left = "0px";
    // document.body.appendChild(circle);
    //
    // document.body.addEventListener('mousemove', (e) => {
    //   // circle.style.top = e.clientX.toString()
    // })

    // Observable.fromEvent(document.body, 'mousemove').subscribe(e => {
    //   const mouse = <MouseEvent>e;
    //   if(mouse.clientX > 0) {
    //     circle.style.top = mouse.clientX.toString();
    //     console.log(mouse);
    //     console.log(circle.style.top);
    //   }
    //   // mouse.clientX
    //   // mouse.clientY
    // })
  }




}
