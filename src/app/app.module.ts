import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//-----------------------------Components------------------------------------------------------//
import { AppComponent } from './app.component';
import { LandingContainerComponent } from './components/landing/landing-container.component';
import { LandingImageComponent } from './components/landing/landing-image/landing-image.component';
import { LandingLogoComponent } from './components/landing/landing-logo/landing-logo.component';
//----------------------------Services---------------------------------------------------------//
import {LandingNavigationAnimationService} from '../services/component-services/landing-navigation-services/landing-navigation-animation.service';
import {ThreeJsService} from '../services/three-services/three-js.service';
import {CursorTrackerService} from '../services/component-services/cursor-tracker/cursor-tracker.service';
import {LandingCanvasService} from '../services/component-services/canvas-service/landing-canvas.service';

//---------------------------Routing-----------------------------------------------------------//
const appRoutes: Routes = [
  {path: '', component: LandingContainerComponent},
];

//---------------------------Module-------------------------------------------------------------//
@NgModule({
  declarations: [
    AppComponent,
    LandingContainerComponent,
    LandingImageComponent,
    LandingLogoComponent
  ],
  imports: [
  	RouterModule.forRoot(
  		appRoutes,
  			{enableTracing: true}
	  	),
    BrowserModule
  ],
  providers: [
    LandingNavigationAnimationService,
    ThreeJsService,
    CursorTrackerService,
    LandingCanvasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
