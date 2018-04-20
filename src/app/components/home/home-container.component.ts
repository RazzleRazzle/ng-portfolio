import { Component, OnInit } from '@angular/core';
import {CallbackRouterAnimation} from '../../router-animation/router-animation';
import { ScrollTrackerService } from '../../../services/component-services/scroll-tracker/scroll-tracker.service';
import anime from 'animejs';


@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  animations: [CallbackRouterAnimation('1s','1s')],
  host: {'[@CallbackRouterAnimation]': '' }
})
export class HomeContainerComponent implements OnInit {
  private canvasHeight:any;
  private canvasWidth:any;

  constructor(
    private trackScroll:ScrollTrackerService
  ) { }

  ngOnInit() {
  }

  private open = (value:string) => {
    console.log(value);
  }

  private onResize = () => {
    // this.canvasWidth = document.body.getBoundingClientRect().width;
    // this.canvasHeight = document.body.getBoundingClientRect().height;
    // console.log(this.canvasWidth, this.canvasHeight);
  }



}
