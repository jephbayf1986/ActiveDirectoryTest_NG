import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
 
@Injectable()

export class InsertAuthTokenInterceptor implements HttpInterceptor {
 
    constructor(private _adal: MsAdalAngular6Service) { }
 
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        
        // get api url from adal config
        const resource = this._adal.GetResourceForEndpoint(request.url);

        if (!resource || !this._adal.isAuthenticated) {
            return next.handle(request);
        }

        // merge the bearer token into the existing headers
        return this._adal.acquireToken(request.url).pipe(
            mergeMap((token: string) => {
                const authorizedRequest = request.clone({
                    headers: request.headers.set('Authorization', `Bearer ${token}`),
                });

                return next.handle(authorizedRequest);
            })
        );
    }
}