import { Component, OnInit } from '@angular/core';
import { SwearWord } from '../domain/swear-word.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-swear-words',
  templateUrl: './swear-words.component.html',
  styleUrls: ['./swear-words.component.css']
})
export class SwearWordsComponent implements OnInit {

  public swearWords: SwearWord[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<SwearWord[]>(environment.apiBaseUrl + 'swearword').subscribe(result => {
      this.swearWords = result;
    }, error => console.error(error));
  }

}
