/* eslint-disable no-console */
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ga-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  {
  isToggled = false;
  hamberger = 'align-left';
  plus_button = 'plus_primary';
  bell_button = 'bell';
  @Output() toggleMenu = new EventEmitter<any>();
  @ViewChild('navbar') nav!: ElementRef;
  // eslint-disable-next-line no-undef
  userAccount:any = sessionStorage.getItem('ga-token')||null;
  userInfo:any = JSON.parse(this.userAccount).user_info;
  constructor(private router:Router) {}

  
  toggleSideBar(toggle: string) {
    if (toggle === 'toggle') {
      this.isToggled = !this.isToggled;
      this.toggleMenu.emit(this.isToggled);
      if (this.isToggled) {
        this.hamberger = 'active_align-left';
      } else {
        this.hamberger = 'align-left';
      }
      // if(this.isToggled){
      //   this.nav.nativeElement.style.boxShadow='180px 2px 6px #00000026';
      // }else{
      //   this.nav.nativeElement.style.boxShadow='64px 2px 6px #00000026';
      // }
    } else if (toggle === 'enter') {
      this.hamberger = 'hover_align-left';
    } else {
      if (!this.isToggled) {
        this.hamberger = 'align-left';
      } else {
        this.hamberger = 'active_align-left';
      }
    }
  }
  mouseEvent(eve: string, eventtype: string) {
    switch (eventtype) {
      case 'plus':
        if (eve === 'enter') {
          this.plus_button = 'hover_plus_primary';
        } else {
          this.plus_button = 'plus_primary';
        }
        break;
      case 'bell':
        if (eve === 'enter') {
          this.bell_button = 'hover_bell';
        } else {
          this.bell_button = 'bell';
        }
        break;
    }
  }
  logout(){
    // eslint-disable-next-line no-undef
    window.sessionStorage.removeItem('ga-token');
    this.router.navigate(['/login']);
  }
}
