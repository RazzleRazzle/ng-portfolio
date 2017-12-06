import { Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class LandingNavigationAnimationService {
  private tracker: number = 0;

  private pageArray: Array<any> = ["Art","Code","Blog","Contact"];
  private currentPage: string;
  private _bodyObj: string = '';

  private bodySubject: BehaviorSubject<any> = new BehaviorSubject(this.currentPage);
  private bodyObservable = this.bodySubject.asObservable();

  constructor() { }

  private navigationReceiver = (tracker: number) => {
  	this.currentPage = this.pageArray[tracker]
    console.log(this.currentPage)
  }

  public sendCurrentPage = () => {
    return this.currentPage;
  }

}
