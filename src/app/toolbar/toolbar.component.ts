import { Component, OnInit } from '@angular/core';

//Adal-Angular4
//import { AdalService } from 'adal-angular4';
//MS Adal-Angular6
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private _adal: MsAdalAngular6Service) { }

  ngOnInit() {
    //Adal-Angular4
    //this._adal.init(environment.adalConfig);
  }

  get signedIn(): boolean {
    //Adal-Angular4
    //return this._adal.userInfo.authenticated;
    //MS Adal-Angular6
    return this._adal.isAuthenticated;
  }

  signIn(): void {
    this._adal.login();
  }
		
  signOut(): void {
    //Adal-Angular4
    //this._adal.logOut();
    //MS Adal-Angular6
    this._adal.logout();
  }
}