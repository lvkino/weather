import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { Weather } from '../weather';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss'],
  providers: [WeatherServiceService]
})
export class WeatherWidgetComponent implements OnInit {

  private todayWeather: Weather;
  private city: string;

  constructor(private weatherServiceService: WeatherServiceService) { }

  ngOnInit() {
    this.onSearch('Sydney');  
  }

  onSearch(city) {
    this.weatherServiceService.getWeather( city ).then( weatherList => {
      this.todayWeather = weatherList[0];
    });
  }

}
