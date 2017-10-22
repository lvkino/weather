import { Component, Input } from '@angular/core';
import { WeatherHero } from '../weatherHero';

@Component({
  selector: 'weather-detail-hero',
  templateUrl: './weather-detail-hero.component.html',
  styleUrls: ['./weather-detail-hero.component.scss']
})
export class WeatherDetailHeroComponent {

  constructor() { }

  @Input() weatherHero: WeatherHero;

}
