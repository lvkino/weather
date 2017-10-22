import { Weather } from './weather'

interface location {
  city: string,
  country: string
  region: string
}

export class StoredWeather {

  constructor(public lastLocalUpdate: Date, 
              public lastUpdate: Date,
              public location: location,
              public forecast: Weather[]) { }

}