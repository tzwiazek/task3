import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherCityComponent } from './weather-city/weather-city.component';
import { WeatherCityDetailsComponent } from './weather-city-details/weather-city-details.component';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


const appRoutes = [
    { path:'',component:WeatherCityComponent },
    { path:'detail/:id',component:WeatherCityDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherCityComponent,
    WeatherCityDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
