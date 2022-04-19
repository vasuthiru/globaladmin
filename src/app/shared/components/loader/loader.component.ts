import { Component, OnInit } from '@angular/core';
import { delay, Subject } from 'rxjs';

import { LoaderService } from './loader.service';

@Component({
  selector: 'ga-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit  {
  isLoading:boolean = false;
  // is_loaded: Subject<boolean> = this._ls.is_loading;

  constructor(private _ls:LoaderService) { }

  ngOnInit(): void {
    this.listenToLoading();
  }
  listenToLoading():void{
    this._ls.loadingSub.pipe(delay(0)).subscribe((loading)=>{
      this.isLoading = loading;
    })
  }

}
