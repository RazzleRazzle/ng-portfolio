import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationContainerComponent } from './components/navigation/navigation-container.component';
import { LandingNavigationContainerComponent } from './components/landing/landing-navigation/landing-navigation-container.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LandingNavigationControllerComponent } from './components/landing/landing-navigation/landing-navigation-controller/landing-navigation-controller.component';
import { LandingNavigationCellComponent } from './components/landing/landing-navigation/landing-navigation-cell/landing-navigation-cell.component';
import { LandingContainerComponent } from './components/landing/landing-container.component';
import { LandingBodyComponent } from './components/landing/landing-body/landing-body.component';
import { LandingEdgeComponent } from './components/landing/landing-edge/landing-edge.component';

const appRoutes: Routes = [
  {path: '', component: LandingContainerComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationContainerComponent,
    LandingNavigationContainerComponent,
    LoaderComponent,
    LandingNavigationControllerComponent,
    LandingNavigationCellComponent,
    LandingContainerComponent,
    LandingBodyComponent,
    LandingEdgeComponent
  ],
  imports: [
  	RouterModule.forRoot(
  		appRoutes,
  			{enableTracing: true}
	  	),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
