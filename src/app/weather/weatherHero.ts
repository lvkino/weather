import { Weather } from './weather';

export class WeatherHero {
    
        constructor(
            private weather: Weather,
            private city: string 
        ) {}
    }