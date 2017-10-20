import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';
import { Weather } from '../weather';

@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers: [WeatherServiceService]
})
export class WeatherWidgetComponent implements OnInit {

  private todayWeather: Weather;

  constructor(private weatherServiceService: WeatherServiceService) { }

  ngOnInit() {
    this.weatherServiceService.getWeather('Sydney').then( weatherList => {
      this.todayWeather = weatherList[0];
    });
  }

}
