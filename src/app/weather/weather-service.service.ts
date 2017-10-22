import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Weather } from './weather';
import { StoredWeather } from './stored-weather';

@Injectable()
export class WeatherServiceService {

  constructor(private http: Http) { }

  private storedWeather: StoredWeather = null;
  private readonly storedWeatherExpiringTime: number = 3600000; // milliseconds
  private ciccio = false;

  private getWeatherCall(city: string) {
    if (!this.validateStoredWeather(city)) {
      return this.http.get(this.weatherUrl(city))
      .map((response) => {
          const json = response.json();
          if (response.ok) {
            //return json.query.results.channel.item.forecast as Weather[];
            let location = json.query.results.channel.location;
            let lastUpdate = json.query.results.channel.lastBuildDate;
            let forecast = json.query.results.channel.item.forecast;
            this.storedWeather = new StoredWeather(new Date, lastUpdate, location, forecast);
            return this.storedWeather;

          } else {
            // TODO: Create an error handler in the component 
            return this.logError(json);
          }
      });
    } else {
      return Observable.create( observer => {
        observer.next(this.storedWeather);
        observer.complete();
      });
    }
    
  }

  getForecast(city: string): Observable<Weather[] | Error>{
    return Observable.create( observer => {
      this.getWeatherCall(city).subscribe((storedWeather: StoredWeather) => {
        observer.next(storedWeather.forecast);
        observer.complete();
      });
    });    
  }

  getWeather(city: string){
    return Observable.create( observer => {
      this.getWeatherCall(city).subscribe((storedWeather: StoredWeather) => {
        observer.next(storedWeather);
        observer.complete(storedWeather);
      });
    });
  }

  private validateStoredWeather(city: string){
    if(!this.storedWeather) return false;
    if(this.storedWeather.location.city.toLowerCase() !== city.toLowerCase()) return false;
    if(Date.now() - this.storedWeather.lastLocalUpdate.getTime() > this.storedWeatherExpiringTime) return false;
    return true;
  }

  private weatherUrl = (city) => {
    return "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20"+city+"%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
  }

  private logError(error: any) : Error {
    throw error;
  }

}
