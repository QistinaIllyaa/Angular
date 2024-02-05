import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { AppComponent } from '../app.component';
import { HomeComponent } from './home.component';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousingLocationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule // Include CommonModule in the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
