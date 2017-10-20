import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Weather } from './weather';

@Injectable()
export class WeatherServiceService {

  constructor(private http: Http) { }

  getWeather(city: string) {
    return this.http.get(this.weatherUrl(city))
    .map((response) => {
        const json = response.json();
        if (response.ok) {
          //TODO: Check if the key is valid
            return json.query.results.channel.item.forecast as Weather[];
        } else {
          // TODO: Create an error handler in the component 
          return this.logError(json);
        }
    });
  }

  private weatherUrl = (city) => {
    return "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20"+city+"%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
  }

  private logError(error: any) : Error {
    throw error;
}

}
