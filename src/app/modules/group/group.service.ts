import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GadataService } from '../../services/gadata.service';

import { Group } from './model/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  constructor(private _http: HttpClient, private _gd:GadataService) { }
  getAddGroupBasicDetials(){
    return this._http.get(this._gd.ADD_GROUP);
  }
  getAddGroupBasicDetialsWithId(id:number){
    return this._http.get(`${this._gd.ADD_GROUP}/${id}`);
  }
  postAddGroupBasicDetails(group: Group): Observable<Group>{
    return this._http.post<Group>(this._gd.ADD_GROUP, group);
  }
  editAddGroupBasicDetails(group: Group, id:number): Observable<Group>{
    return this._http.patch<Group>(`${this._gd.ADD_GROUP}${id}/`, group);
  }
  uploadStaff(id:number, file:any){
    return this._http.post(`${this._gd.UPLOAD_GROUP_OR_SCHOOL_STAFF}/${id}/`, file);
  }
}
