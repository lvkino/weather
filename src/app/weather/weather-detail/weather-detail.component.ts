import { Component, Input } from '@angular/core';
import { Weather } from '../weather';

@Component({
  selector: 'weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent {

  // constructor() { }

  @Input() weather: Weather;

}
