/* eslint-disable no-undef */
import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
export interface Selected_Menu_Item {
  name:string,
  icon:string,
  is_selected:boolean,
  behave:string
}
@Component({
  selector: 'ga-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() is_toggled_flag!:boolean;
  itemBehave='active_';
  menu_items = [
    {name:'home', icon:'home', path:'home', is_selected:false, behave:''},
    {name:'profile', icon:'graduation-cap', path:'school-list', is_selected:false, behave:''},
    {name:'contactus', icon:'eye', path:'contactus', is_selected:false, behave:''},
  ];
  @ViewChild('sidenav',{static: true}) el!: ElementRef;

  constructor(private _ad:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let url = this.router.url.substring(1);
    this.menu_items.map((res:Selected_Menu_Item)=>{
      if(res.name===url){
        res.is_selected=true;
        res.behave='active_';
      }else{
        res.is_selected=false;
        res.behave='';
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.style.transition='.3s';
    if(this.is_toggled_flag){
      // this.el.nativeElement.style.width="180px";
    }else{
      // this.el.nativeElement.style.width="64px";
    }
  }

  settingSvgIcon(item:Selected_Menu_Item, type:string, indx:number){
    if(type==='active'){
      this.menu_items.map((res:Selected_Menu_Item)=>{
        if(res.name===item.name){
          res.is_selected=true;
          res.behave='active_';
        }else{
          res.is_selected=false;
          res.behave='';
        }
      });
    }else if(type==='enter'){
      this.menu_items[indx]['behave']='hover_';
      // this.menu_items.map((res:Selected_Menu_Item)=>res.is_selected?res.behave='active_':res.behave='hover_');
    }
    else{
      this.menu_items.map((res:Selected_Menu_Item)=>res.is_selected?res.behave='active_':res.behave='');
    }

  }

}
