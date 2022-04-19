import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { LoginModel } from '../modules/login/login.model';

import { ApiConstants } from './api.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  genarateOtp(login: any) {    
    return this.http.post(`${this.baseUrl}/${ApiConstants.GENERATE_OTP}`, login);
  }
  onVerifyOtp(verify_otp: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${ApiConstants.VERIFY_OTP}`, verify_otp);
  }
}
