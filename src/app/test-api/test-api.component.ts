import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast } from '../domain/weather-forecast.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})

export class TestApiComponent implements OnInit {

  public forecasts: WeatherForecast[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<WeatherForecast[]>(environment.apiBaseUrl + 'weather').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}