import { Component, OnInit } from '@angular/core';
import {ThreeJsService} from '../../../services/three-services/three-js.service';
@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.scss']
})
export class LandingContainerComponent implements OnInit {

  constructor(
    private three: ThreeJsService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.three.init();
    this.three.animate();
  }

  private test = () => {
    console.log('test')
  }
}
