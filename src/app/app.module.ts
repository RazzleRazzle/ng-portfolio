import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// const appRoutes: Routes = [
// 	{path:'', component: },
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  	// RouterModule.forRoot(
  	// 	appRoutes,
  	// 		{enableTracing: true}
	  // 	),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
