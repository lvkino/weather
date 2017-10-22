import { Weather } from './weather';

export class WeatherHero extends Weather{
    
        constructor(
            private city: string,
            private weather: Weather
        ) {
            super(weather.code, weather.date, weather.day, weather.high, weather.low, weather.test);
        }
    }