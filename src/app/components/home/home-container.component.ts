import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {
  private btns = [
    {
      value: 'paint',
      viewValue: 'Painting'
    },
    {
      value: 'photo',
      viewValue: 'Photography'
    },
    {
      value: 'dev',
      viewValue: 'Development'
    },
    {
      value: 'contact',
      viewValue: 'Contact'
    }
  ];

  constructor() { }

  ngOnInit() {}

  private open = (value:string) => {
    console.log(value);
  }

}
