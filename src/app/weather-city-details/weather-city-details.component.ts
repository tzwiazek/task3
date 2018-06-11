import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-city-details',
  templateUrl: './weather-city-details.component.html',
  styleUrls: ['./weather-city-details.component.css']
})
export class WeatherCityDetailsComponent implements OnInit {
    weatherDetails:any;
    selectedCity:any;

    constructor(private WeatherService:WeatherService) { }

    ngOnInit() {
        this.selectedCity = this.WeatherService.showSelectedCity();

        this.WeatherService.getWeather(this.selectedCity).subscribe(response => {
            this.weatherDetails = response;

            if (this.weatherDetails.query.results != null && this.weatherDetails.query.results.channel.location.city == "Lodz") {
                this.weatherDetails.query.results.channel.location.city = "Łódź";
            }
        })

        setInterval(() => {
            this.selectedCity = this.WeatherService.showSelectedCity();
            this.WeatherService.getWeather(this.selectedCity).subscribe(response => {
                this.weatherDetails = response;
            });
        }, 10000);
    }

}
