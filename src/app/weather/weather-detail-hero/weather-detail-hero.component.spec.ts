import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailHeroComponent } from './weather-detail-hero.component';
import { WeatherHero } from '../weatherHero';
import { MOCK_WEATHER } from '../mock-weather';

describe('WeatherDetailHeroComponent', () => {
  let component: WeatherDetailHeroComponent;
  let fixture: ComponentFixture<WeatherDetailHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDetailHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetailHeroComponent);
    component = fixture.componentInstance;
    component.weatherHero = new WeatherHero("Sydney", MOCK_WEATHER[0]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
