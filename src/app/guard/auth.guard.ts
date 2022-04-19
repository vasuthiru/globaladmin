import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.getsessionStorage();
    const refresh_exp = currentUser.refresh_exp*1000+24*60*60*1000;
    // const refresh_exp = currentUser.refresh_exp;
    const curr_epoch = new Date().getTime();
    // console.log(refresh_exp, curr_epoch,'jkkjjj' )

    if (refresh_exp >= curr_epoch) {
      // logged in so return true
      return true;
    } else{
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
      

    // not logged in so redirect to login page with the return url and return false
  }
  getsessionStorage() {
    // eslint-disable-next-line no-undef
    let windowSession: any = window.sessionStorage.getItem('ga-token');
    let ws:any = JSON.parse(windowSession);
    let base64Url = ws['token'].split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // eslint-disable-next-line no-undef
    let jsonPayload = decodeURIComponent(
      // eslint-disable-next-line no-undef
      atob(base64)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }
}
