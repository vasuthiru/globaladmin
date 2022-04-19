import {  Component, HostListener } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

import { LoaderService } from './shared/components/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'GlobalUI';
  idletimer = 5;
  setTimeint:any;
  constructor(private router: Router, private _ls:LoaderService){
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((res) => { 
      if(this.router.url !== '/login'){
      console.log(this.router.url,'Current URL');
        // this.setTimer();
      }
    })
    router.events.subscribe(evt=>{
      if(evt instanceof NavigationStart){
        // this._ls.setLoading(true, 'nourl');
        this._ls.loadingSub.next(true);        
      }
      if(evt instanceof NavigationEnd){
        // this._ls.setLoading(false, 'nourl');
        this._ls.loadingSub.next(false);
      }
      if(evt instanceof NavigationCancel){
        // this._ls.setLoading(false, 'nourl');
        this._ls.loadingSub.next(false);
      }
      if(evt instanceof NavigationError){
        // this._ls.setLoading(false, 'nourl');
        this._ls.loadingSub.next(false);
      }
    })
  
  }
  
  
  setTimer(){
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      this.idletimer = 5;
      this.idleLogout()
    }, 600000);
  }
  idleLogout(){
    // eslint-disable-next-line no-undef
    clearInterval(this.setTimeint);

    // eslint-disable-next-line no-undef
    this.setTimeint = setInterval(() => {
      this.idletimer--;
      if(this.idletimer <=0){
        // eslint-disable-next-line no-undef
        clearInterval(this.setTimeint);
        // eslint-disable-next-line no-undef
        window.sessionStorage.removeItem('ga-token');
        this.router.navigate(['login']);
      }
    }, this.idletimer*1000);
  }
  @HostListener('document:click', ['$event.target'])
  @HostListener('mousemove', ['$event'])
  @HostListener('mousedown', ['$event'])
  @HostListener('touchmove', ['$event'])
  public onClick(targetElement:HTMLElement): void {
    this.setTimer();
  }
}
