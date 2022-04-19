import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'ga-school-basic-details',
  templateUrl: './school-basic-details-form.component.html',
  styleUrls: ['./school-basic-details-form.component.scss']
})
export class SchoolBasicDetailsFormComponent implements OnInit {
  basicDetailsForm: FormGroup;
  formFields = [
    {label:'schoolname', control:'school_name', placeholder:'school name', type:'text'},
    {label:'address line1', control:'address_line1', placeholder:'address line1', type:'text'},
    {label:'address line2', control:'address_line2', placeholder:'address line2', type:'text'},
    {label:'pincode', control:'pincode', placeholder:'pin code', type:'number'},
    {label:'state', control:'state', placeholder:'state', type:'select'},
    {label:'curriculum', control:'curriculum', placeholder:'curriculum', type:'text'},
    {label:'assign group', control:'assign_group', placeholder:'assign group', type:'text'},
    {label:'min class', control:'min_class', placeholder:'min class', type:'text'},
    {label:'max class', control:'max_class', placeholder:'max class', type:'text'},
  ];
  @Output() formEvent = new EventEmitter<any>();
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.basicDetailsForm = this._fb.group({
      // school_name: ['', Validators.required],
      // address_line1: ['', Validators.required],
      // address_line2: ['', Validators.required],
      // pincode: ['', Validators.required],
      // state: ['', Validators.required],
      // carriculum: ['', Validators.required],
      // assign_group: ['', Validators.required],
      // min_class: ['', Validators.required],
      // max_class: ['', Validators.required],
    });
    this.formFields.forEach((field:any) => {
      if(field.label==='email'){
        this.basicDetailsForm.addControl(field.control, new FormControl('', Validators.required, ));      
      }else{
        this.basicDetailsForm.addControl(field.control, new FormControl('', Validators.required));      
      }
    });
  }
  get controls() {       
    // console.log(this.basicDetailsForm.controls)  
    return this.basicDetailsForm.controls;     
  }
  onSubmitBasicDetailsForm(){    
    this.formEvent.emit(this.basicDetailsForm);
  }
}

