import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '../domain/weather-forecast.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-only-api',
  templateUrl: './admin-only-api.component.html',
  styleUrls: ['./admin-only-api.component.css']
})
export class AdminOnlyApiComponent implements OnInit {

  public forecasts: WeatherForecast[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<WeatherForecast[]>(environment.apiBaseUrl + 'extremeweather').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}
