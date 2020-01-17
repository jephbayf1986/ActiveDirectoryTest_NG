import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RouteComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

//Adal-Angular4
//import { AdalGuard, AdalInterceptor, AdalService } from 'adal-angular4';

//MS Adal-Angular6
import { MsAdalAngular6Module, AuthenticationGuard  } from 'microsoft-adal-angular6';
import { environment } from 'src/environments/environment';
import { InsertAuthTokenInterceptor } from './auth/insert-auth-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RouteComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MsAdalAngular6Module.forRoot(environment.adalConfig)
  ],
  providers: [
        //Adal-Angular4
		    //AdalService,
		    //AdalGuard,
		    //{ 
		      //provide: HTTP_INTERCEPTORS, 
		      //useClass: AdalInterceptor, 
		      //multi: true 
        //}
        //MS Adal-Angular6
        AuthenticationGuard,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InsertAuthTokenInterceptor,
          multi: true
        }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
