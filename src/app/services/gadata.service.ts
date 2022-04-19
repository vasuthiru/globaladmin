import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

import { ApiConstants } from './api.constants';

@Injectable({
  providedIn: 'root'
})
export class GadataService {
  BASE_URL = environment.baseUrl;
  ADD_GROUP = `${this.BASE_URL}/${ApiConstants.ADD_GROUP}`;
  ADD_SCHOOLS = `${this.BASE_URL}/${ApiConstants.ADD_SCHOOLS}`;
  UPLOAD_GROUP_OR_SCHOOL_STAFF = `${this.BASE_URL}/${ApiConstants.UPLOAD_GROUP_OR_SCHOOL_STAFF}`
  constructor(private _http: HttpClient) { }
}
