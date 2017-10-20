import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather/weather-widget/weather-widget.component';
import { WeatherDetailComponent } from './weather/weather-detail/weather-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
