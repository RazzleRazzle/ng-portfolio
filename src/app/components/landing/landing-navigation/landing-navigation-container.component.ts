import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-navigation-container',
  templateUrl: './landing-navigation-container.component.html',
  styleUrls: ['./landing-navigation-container.component.scss']
})
export class LandingNavigationContainerComponent implements OnInit {
  private pageArray: Array<any> = ["Art","Code","Blog","Contact"];
  private currentPage: string;

  constructor() { }

  ngOnInit() {}

  private navigationReceiver = (tracker: number) => {
  	this.currentPage = this.pageArray[tracker]
    console.log(this.currentPage)
  }


}
