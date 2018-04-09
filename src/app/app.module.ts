import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//-----------------------------Components------------------------------------------------------//
import { AppComponent } from './app.component';
import { LandingContainerComponent } from './components/landing/landing-container.component';
import { LandingImageComponent } from './components/landing/landing-image/landing-image.component';
import { LandingLogoComponent } from './components/landing/landing-logo/landing-logo.component';
import { PhotographViewComponent } from './components/views/photograph-view/photograph-view.component';
import { HomeMenuComponent } from './components/home/home-menu/home-menu.component';
import { HomeContainerComponent } from './components/home/home-container.component';


//----------------------------Services---------------------------------------------------------//
import {LandingNavigationAnimationService} from '../services/component-services/landing-navigation-services/landing-navigation-animation.service';
import {ThreeJsService} from '../services/three-services/three-js.service';
import {CursorTrackerService} from '../services/component-services/cursor-tracker/cursor-tracker.service';
import { LandingCanvasService} from '../services/component-services/canvas-service/landing-canvas.service';
import { HomeCanvasService } from '../services/component-services/canvas-service/home-canvas/home-canvas.service';


//---------------------------Routing-----------------------------------------------------------//
const appRoutes: Routes = [
  {path: '', component: LandingContainerComponent},
  {path: 'home', component: HomeContainerComponent},
  {path: 'photography', component: PhotographViewComponent},
];


//---------------------------Module-------------------------------------------------------------//
@NgModule({
  declarations: [
    AppComponent,
    LandingContainerComponent,
    LandingImageComponent,
    LandingLogoComponent,
    HomeContainerComponent,
    HomeMenuComponent,
    PhotographViewComponent
  ],
  imports: [
  	RouterModule.forRoot(
  		appRoutes,
  			{enableTracing: true}
	  	),
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    LandingNavigationAnimationService,
    ThreeJsService,
    CursorTrackerService,
    LandingCanvasService,
    HomeCanvasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
