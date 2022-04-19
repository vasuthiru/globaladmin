/* eslint-disable no-console */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent  {
  is_toggled = false;
  constructor(public router:Router) { }

  
  toggleMenu(e:boolean){
    // console.log(e);
    // let main:any = document.getElementById('main');
    this.is_toggled = e;
    // if(this.is_toggled){
    //   main.style.marginLeft = '180px';
    //   main.style.width = 'calc(100% - 180px)';
    // }else{
    //   main.style.marginLeft = '64px';
    //   main.style.width = 'calc(100% - 64px)';
    // }
  }
}
