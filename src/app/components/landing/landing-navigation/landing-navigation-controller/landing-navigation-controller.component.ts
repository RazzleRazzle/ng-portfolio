import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-landing-navigation-controller',
  templateUrl: './landing-navigation-controller.component.html',
  styleUrls: ['./landing-navigation-controller.component.scss']
})
export class LandingNavigationControllerComponent implements OnInit {
	@Output() navigationEmitter: EventEmitter<number> = new EventEmitter();
  @Input() pageArray: Array<any> = ["Art","Code","Blog","Contact"];

	private tracker: number = 0;

  constructor() { }

  ngOnInit() {}

  private navigate = (direction: number) => {
  	if (direction === 1 && this.tracker <= this.pageArray.length) {
  		this.tracker += 1;
  		this.navigationEmitter.emit(<number>this.tracker)
  	} else if (direction === -1 && this.tracker > 0) {
  		this.tracker -= 1;
  		this.navigationEmitter.emit(<number>this.tracker)
  	} else {}
  }
}
