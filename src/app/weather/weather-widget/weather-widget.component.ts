import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { Weather } from '../weather';
import { WeatherHero } from '../weatherHero';
import { StoredWeather } from '../stored-weather';


@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [WeatherServiceService]
})
export class WeatherWidgetComponent implements OnInit {

  private todayWeather: WeatherHero;
  private nextFiveDaysWeather: Weather[];
  private city: string;
  weatherList: Weather[] = null;


  constructor(private weatherServiceService: WeatherServiceService) { }

  ngOnInit() {
    this.onSearch('Sydney');
  }

  onSearch(city) {
    if(city.length < 3) return false;

    this.weatherServiceService.getWeather( city ).subscribe((weather: StoredWeather) => {
      this.todayWeather = new WeatherHero(weather.location.city, weather.forecast[0]);
    
      this.weatherServiceService.getForecast( city ).subscribe((weatherList: Weather[]) => {
        this.nextFiveDaysWeather = weatherList.slice(1,6);
      });
    });
  }

  onKey($event){
    if($event.keyCode === 13) this.onSearch($event.target.value);
  }

}
