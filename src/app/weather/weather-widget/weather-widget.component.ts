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
  weatherList: Weather[] = null;


  constructor(private weatherServiceService: WeatherServiceService) { }

  ngOnInit() {
    this.onSearch('Sydney');  
  }

  onSearch(city) {   
    this.weatherServiceService.getWeather( city ).subscribe((weatherList: Weather[]) => {
      this.todayWeather = weatherList[0];
    });    
  }

}
