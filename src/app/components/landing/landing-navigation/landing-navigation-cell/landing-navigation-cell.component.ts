import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-navigation-cell',
  templateUrl: './landing-navigation-cell.component.html',
  styleUrls: ['./landing-navigation-cell.component.scss']
})
export class LandingNavigationCellComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit() {}

  private route = (item) => {

  }

}
