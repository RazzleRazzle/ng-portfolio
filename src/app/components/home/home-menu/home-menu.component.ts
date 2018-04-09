import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {HomeCanvasService} from "../../../../services/component-services/canvas-service/home-canvas/home-canvas.service";
@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {
  private btns = [
    {
      value: 'paint',
      viewValue: 'PAINTING',
      routerValue: 'painting'
    },
    {
      value: 'photo',
      viewValue: 'PHOTOGRAPHY',
      routerValue: 'photography'

    },
    {
      value: 'dev',
      viewValue: 'DEVELOPMENT',
      routerValue: 'development'
    },
    {
      value: 'contact',
      viewValue: 'CONTACT',
      routerValue: 'contact'

    }
  ];

  constructor(
    private el:ElementRef,
    private canvas:HomeCanvasService
  ) { }

  private state:string;

  ngOnInit() {
    // this.canvas.initCanvas();
  }

  private open = (value:string) => {
    console.log(value)
  }

  // @HostListener('mouseover', ['$event'])
  //   checkScroll() {
  //     // const componentPosition = this.el.nativeElement.offsetTop
  //     console.log(this.el.nativeElement)
  //
  //     // if (scrollPosition >= c  omponentPosition) {
  //     //   this.state = 'show'
  //     // } else {
  //     //   this.state = 'hide'
  //     // }
  //     // console.log(this.state)
  //   }



}
