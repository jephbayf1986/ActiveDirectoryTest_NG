import { Component, OnInit } from '@angular/core';

//Adal-Angular4
//import { AdalService } from 'adal-angular4';
//MS Adal-Angular6
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { environment } from 'src/environments/environment';

const _microsoftGraphUri = 'https://graph.microsoft.com/v1.0/me/memberOf';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  userName: string;
  profile: any;
  something: any;

  constructor(private http: HttpClient, private _adal: MsAdalAngular6Service) { }

  ngOnInit() {
    this.userName = this._adal.userInfo.userName;
    this.profile = this._adal.userInfo.profile;

    this.http.get(environment.apiBaseUrl + 'profile').subscribe(result => {
      var test = result;
    }, error => console.error(error));

    this.http.get(_microsoftGraphUri).subscribe(data => {
      this.something = data;
      this.something = this.something;
    });
  }
}