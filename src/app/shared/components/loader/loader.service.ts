import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  is_loading = new Subject<boolean>();
  loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loadingMap: Map<string, boolean> = new Map<string, boolean>();
  constructor() { }
  showloader(){
    this.is_loading.next(true);
  }
  hideloader(){
    this.is_loading.next(false);
  }
  setLoading(loading:boolean, url: string){
    if(!url){
      throw new Error('The request url must be provided to the loadingservice.setloading function');
    }
    if(loading === true){
      this.loadingMap.set(url, loading);
      this.loadingSub.next(true);
    } else if(loading === false && this.loadingMap.has(url)){
      this.loadingMap.delete(url)
    }
    if(this.loadingMap.size === 0){
      this.loadingSub.next(false)
    }
  }
}
