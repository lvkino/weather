import { Weather } from './weather';

export class WeatherHero extends Weather{
    
        constructor(
            public city: string,
            public weather: Weather
        ) {
            super(weather.code,
                  weather.date,
                  weather.day,
                  weather.high,
                  weather.low,
                  weather.text);
        }
    }