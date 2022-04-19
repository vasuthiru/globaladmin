import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpstatusService {
  statusCodeSubject = new BehaviorSubject<any>(null);
  statusCode = this.statusCodeSubject.asObservable();
  static:string;
  constructor(private http: HttpClient) {
    this.statusCode.subscribe();
   }
  getHttpRequestStatusCode(status:any){
    this.statusCodeSubject.next(status);    
  }
  getStatusCode(){
    return this.statusCode.subscribe();
  }
}
