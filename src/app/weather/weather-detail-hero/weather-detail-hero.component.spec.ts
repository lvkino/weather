import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetailHeroComponent } from './weather-detail-hero.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
