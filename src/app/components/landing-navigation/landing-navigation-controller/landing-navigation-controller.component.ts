import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-navigation-controller',
  templateUrl: './landing-navigation-controller.component.html',
  styleUrls: ['./landing-navigation-controller.component.scss']
})
export class LandingNavigationControllerComponent implements OnInit {
	private tracker: number = 0;
	private pageArray: Array<any> = ["Art","Code","Blog","Contact"];

  constructor() { }

  ngOnInit() {}

  private navigate = (direction: string) => {
  	if (direction === "+" && this.tracker <= this.pageArray.length) {
  		this.tracker += 1;
  	} else if (direction === "-" && this.tracker > 0) {
  		this.tracker -= 1;
  	} else {}
  	console.log(this.tracker);
  }
}
