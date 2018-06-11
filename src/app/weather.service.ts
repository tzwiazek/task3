import { Injectable } from '@angular/core';
import { City } from './city';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface WeatherResponse {
}

@Injectable()
export class WeatherService {
  selectedCity:string;
  url;
  constructor(private http: HttpClient) {
    this.url='http://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="';
  }

  cities = [
    new City(1,'Lodz'),
    new City(2,'Warszawa'),
    new City(3,'New York'),
    new City(4,'Berlin'),
    new City(5,'London')
  ];

  getRandomCity(length: number) {
    let temp_arr = [];
    let randomCities = [];
    if (length > this.cities.length) {
      throw new Error(`Length is to big than cities count ${this.cities.length}`)
    }
    while(temp_arr.length < length) {
      let city = (Math.floor(Math.random()*5)+1)-1;
      if(temp_arr.indexOf(city) > -1) continue;
      temp_arr[temp_arr.length] = city;
    }

    for(let i=0;i<temp_arr.length;i++) {
      randomCities[i] = {
        name: this.cities[temp_arr[i]].name,
        id: this.cities[temp_arr[i]].id};
    }

    return randomCities;
  }

  getWeather(city: string): Observable<WeatherResponse>{
    return this.http.get(this.url+city+"\")&format=json")
  }

  getSelectedCity(city: any) {this.selectedCity = city.name;}
  showSelectedCity() {return this.selectedCity;}
}
