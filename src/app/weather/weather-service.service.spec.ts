import { TestBed, inject } from '@angular/core/testing';
import { HttpModule }    from '@angular/http';
import { Http } from '@angular/http';

import { WeatherServiceService } from './weather-service.service';

describe('WeatherServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        WeatherServiceService, 
        Http
      ]
    });
  });

  // it('should be created', inject([WeatherServiceService], (service: WeatherServiceService) => {
  //   expect(service).toBeTruthy();
  // }));
});
