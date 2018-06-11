import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.css']
})
export class WeatherCityComponent implements OnInit {
  randomCity:any;
  temp:string;
  weather = [];
  selectedCity:any;


  constructor(private WeatherService:WeatherService) { }

  ngOnInit() {

   this.randomCity = this.WeatherService.getRandomCity(3);
   setInterval(() => {
       this.randomCity = this.WeatherService.getRandomCity(3);
   }, 60000);


      for(let i=0;i<3;i++) {
         this.WeatherService.getWeather(this.randomCity[i].name).subscribe(response => {
            this.weather[i] = {temp:Math.round((response.query.results.channel.item.condition.temp-32)/(9/5)), desc:response.query.results.channel.item.condition.text, img:response.query.results.channel.item.description.slice(19,56)};
         });

         if(this.randomCity[i].name == "Lodz") {
            this.randomCity[i].name = "Łódź";
         }
      }
   }

    onSelect(city:string) {
        this.selectedCity = city;
        this.WeatherService.getSelectedCity(this.selectedCity);
    }
}
