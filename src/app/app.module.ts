import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//-----------------------------Components------------------------------------------------------//
import { AppComponent } from './app.component';
import { LandingContainerComponent } from './components/landing/landing-container.component';
import { PaintingPageContainerComponent } from './components/projects/painting-page/painting-page-container.component';
import { PhotoGridComponent } from './components/projects/photography/photo-grid/photo-grid.component';
import { LandingImageComponent } from './components/landing/landing-image/landing-image.component';
import { LandingLogoComponent } from './components/landing/landing-logo/landing-logo.component';
//----------------------------Services---------------------------------------------------------//
import {LandingNavigationAnimationService} from '../services/component-services/landing-navigation-services/landing-navigation-animation.service';
import {ThreeJsService} from '../services/three-services/three-js.service';
import { LandingLowerNameComponent } from './components/landing/landing-lower-name/landing-lower-name.component';
import { LandingUpperNameComponent } from './components/landing/landing-upper-name/landing-upper-name.component';
//---------------------------Routing-----------------------------------------------------------//
const appRoutes: Routes = [
  {path: '', component: LandingContainerComponent},
  {path: 'art', component: PaintingPageContainerComponent},
  {path: 'development', component: PaintingPageContainerComponent},
  {path: 'contact', component: PaintingPageContainerComponent}
];

//---------------------------Module-------------------------------------------------------------//
@NgModule({
  declarations: [
    AppComponent,
    LandingContainerComponent,
    PaintingPageContainerComponent,
    PhotoGridComponent,
    LandingImageComponent,
    LandingLogoComponent,
    LandingLowerNameComponent,
    LandingUpperNameComponent
  ],
  imports: [
  	RouterModule.forRoot(
  		appRoutes,
  			{enableTracing: false}
	  	),
    BrowserModule
  ],
  providers: [
    LandingNavigationAnimationService,
    ThreeJsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
