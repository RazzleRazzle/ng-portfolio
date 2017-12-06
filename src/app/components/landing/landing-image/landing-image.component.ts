import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-image',
  templateUrl: './landing-image.component.html',
  styleUrls: ['./landing-image.component.scss']
})
export class LandingImageComponent implements OnInit {
  @Input() imageURL: any;
  constructor() { }

  ngOnInit() {
    this.imageURL = '';
  }

}
