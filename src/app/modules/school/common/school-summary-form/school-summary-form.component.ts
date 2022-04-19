import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { _SchoolSummary } from './school-summary';
import { SchoolsummaryService } from './schoolsummary.service';

@Component({
  selector: 'ga-school-summary-form',
  templateUrl: './school-summary-form.component.html',
  styleUrls: ['./school-summary-form.component.scss']
})
export class SchoolSummaryFormComponent implements OnInit {
  schoolSummaryForm:FormGroup;
  matcher = new ErrorStateMatcher();
  summarylist:any;
  summaryFields:any=[];
  @ViewChild('formDir') formDir:NgForm;
  @Output() schoolSummaryFormSubmit = new EventEmitter<any>()
  @Output() summaryFormPrevious = new EventEmitter<any>()
  constructor(private _fb:FormBuilder, private _SS: SchoolsummaryService) { }

  ngOnInit(): void {
    this.summarylist = this._SS.SchoolSummaryList;
    this.schoolSummaryForm = this._fb.group({

    });
    this.createFields();
  }

  createFields(){
    for(let key in this.summarylist){
      let typer = typeof this.summarylist[key];
      if(typer==='object'){
        this.summaryFields.push({type:'object', control:key, value: this.summarylist[key]});
        this.schoolSummaryForm.addControl(key, new FormControl(this.summarylist[key].toString()));
      }else if((typer==='string')){
        this.summaryFields.push({type:'text', control:key, value: this.summarylist[key]});
        this.schoolSummaryForm.addControl(key, new FormControl(this.summarylist[key], Validators.required));
      }else if(typer==='number'){
        this.summaryFields.push({type:'number', control:key, value: this.summarylist[key]});
        this.schoolSummaryForm.addControl(key, new FormControl(this.summarylist[key], Validators.required));
      }
    }
  }
  onSubmitSummaryForm(){
    this.schoolSummaryFormSubmit.emit(this.schoolSummaryForm);
  }
  gotoPrevious(){
    this.summaryFormPrevious.emit('previous');
  }
  returnFunc(){
    return 0;
  }
}
