import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

//Adal-Angular4
//import { AdalService } from 'adal-angular4';
//MS Adal-Angular6
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-sign-in-callback',
  template: ''
})

export class SignInCallbackComponent implements OnInit {

  constructor(private router: Router, 
              private _adal: MsAdalAngular6Service, 
              private _zone: NgZone) { }
		 
  ngOnInit() {
      this._adal.handleCallback();
   
      setTimeout(() => {
          this._zone.run(() => this.router.navigate(['/']));
      }, 200);
  }
}