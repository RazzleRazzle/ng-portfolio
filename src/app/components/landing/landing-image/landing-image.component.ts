import { Component, OnInit, Input } from '@angular/core';
import {LandingCanvasService} from '../../../../services/component-services/canvas-service/landing-canvas.service';

@Component({
  selector: 'app-landing-image',
  templateUrl: './landing-image.component.html',
  styleUrls: ['./landing-image.component.scss']
})
export class LandingImageComponent implements OnInit {
  @Input() imageURL: any;

  constructor(
    private canvas:LandingCanvasService
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.canvas.initCanvas();
  }


}
