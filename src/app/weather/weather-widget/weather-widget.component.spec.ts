import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherWidgetComponent } from './weather-widget.component';
import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';
import { WeatherDetailHeroComponent } from '../weather-detail-hero/weather-detail-hero.component';

import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

describe('WeatherWidgetComponent', () => {
  let component: WeatherWidgetComponent;
  let fixture: ComponentFixture<WeatherWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        WeatherWidgetComponent,
        WeatherDetailComponent,
        WeatherDetailHeroComponent ],
      imports: [
        FormsModule,
        HttpModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
