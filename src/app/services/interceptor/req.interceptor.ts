import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { LoaderService } from '../../shared/components/loader/loader.service';
// eslint-disable-next-line import/no-unresolved


import { HttpstatusService } from './httpstatus.service';

var baseUrl = environment.baseUrl;
@Injectable()
export class ReqInterceptor implements HttpInterceptor {
  constructor(private router: Router, private _httpstatus: HttpstatusService, private _ls: LoaderService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('api request', req.url)
    // this._ls.showloader();
    // eslint-disable-next-line no-undef
    if('ga-token' in window.sessionStorage){
      // eslint-disable-next-line no-undef
      let account:any = window.sessionStorage.getItem('ga-token');
      account = JSON.parse(account)
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${account.token}` }
      });
    }
    
    if(req.url.includes(baseUrl)){
      this._ls.setLoading(true, req.url);
    }
    
    return next.handle(req).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          // this._ls.hideloader();
          this._ls.setLoading(false, req.url);
          this._httpstatus.getHttpRequestStatusCode(evt.status);
        }
      }),
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          // this._ls.hideloader();
          this._ls.setLoading(false, req.url);
          this._httpstatus.getHttpRequestStatusCode(error.status);
          // console.error('error status = ', error.status);
          // console.log('---> filter:', req.params.get('filter'));

          if (error.status >= 300 && error.status !== 404) {
            // redirect to error page
            // OR you can use a toast
            // console.error('redirect');
            // this.router.navigate(['http-error'], { queryParams: { status: error.status } });
          }
        }
        return throwError(error);
      })
    );
  }
}
