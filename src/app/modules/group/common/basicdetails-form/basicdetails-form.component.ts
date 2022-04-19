import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { GroupService } from '../../group.service';

@Component({
  selector: 'ga-basicdetails-form',
  templateUrl: './basicdetails-form.component.html',
  styleUrls: ['./basicdetails-form.component.scss']
})
export class BasicdetailsFormComponent implements OnInit {
  basicDetailsForm: FormGroup;
  @Output() formEvent = new EventEmitter<any>();
  constructor(private _fb:FormBuilder, private _gs: GroupService, private _ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.basicDetailsForm = this._fb.group({
      name: ['', Validators.required],
      address_line_one: ['', Validators.required],
      address_line_two: ['', Validators.required],
      district: ['', Validators.required],
      pin_code: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
    });

    this._ar.queryParams.subscribe((params:Params)=>{
      if('id' in params){
        let id:number = params['id'];
        this.getOnloadEditWithId(id);
      }
    });    
  }
  getOnloadEditWithId(id:number){
    this._gs.getAddGroupBasicDetialsWithId(id).subscribe((res:any)=>{
      this.basicDetailsForm.patchValue({
        name: res['name'],
        address_line_one: res['address_line_one'],
        address_line_two: res['address_line_two'],
        country: res['country'],
        pin_code: res['pin_code'],
        state: res['state'],
        district: res['district'],
      });      
    });
  }
  get controls() {
    return this.basicDetailsForm.controls;
  }
  onSubmitBasicDetailsForm(){
    this.formEvent.emit(this.basicDetailsForm);
  }
}
