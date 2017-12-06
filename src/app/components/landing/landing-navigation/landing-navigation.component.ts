import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-navigation',
  templateUrl: './landing-navigation.component.html',
  styleUrls: ['./landing-navigation.component.scss']
})
export class LandingNavigationComponent implements OnInit {
  private items: Array<string> = ['art', 'development', 'contact'];

  constructor() { }

  ngOnInit() {

  }

  private test = (test:any) => {
    console.log('test')
  }

}
