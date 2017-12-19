import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//-----------------------------Components------------------------------------------------------//
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LandingContainerComponent } from './components/landing/landing-container.component';
import { PaintingPageContainerComponent } from './components/projects/painting-page/painting-page-container.component';
import { PhotoGridComponent } from './components/projects/photography/photo-grid/photo-grid.component';
import { LandingNavigationComponent } from './components/landing/landing-navigation/landing-navigation.component';
import { LandingImageComponent } from './components/landing/landing-image/landing-image.component';
import { LandingLogoComponent } from './components/landing/landing-logo/landing-logo.component';
import { LandingNavigationCellComponent } from './components/landing/landing-navigation/landing-navigation-cell/landing-navigation-cell.component';
import { LandingNavigationToggleComponent } from './components/landing/landing-navigation-toggle/landing-navigation-toggle.component';

//----------------------------Services---------------------------------------------------------//
import {LandingNavigationAnimationService} from '../services/component-services/landing-navigation-services/landing-navigation-animation.service';
import {ThreeJsService} from '../services/three-services/three-js.service';
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
    LoaderComponent,
    LandingContainerComponent,
    PaintingPageContainerComponent,
    PhotoGridComponent,
    LandingNavigationComponent,
    LandingImageComponent,
    LandingLogoComponent,
    LandingNavigationCellComponent,
    LandingNavigationToggleComponent
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
