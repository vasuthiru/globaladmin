import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { MyErrorStateMatcher } from '../../../../shared/utilityclass/error.statematcher';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
@Component({
  selector: 'ga-summary-form',
  templateUrl: './summary-form.component.html',
  styleUrls: ['./summary-form.component.scss']
})
export class SummaryFormComponent implements OnInit, OnChanges {
  @Output()summaryFormEvent = new EventEmitter<any>();
  @Output()summaryFormPrevious = new EventEmitter<string>();
  summaryForm: FormGroup;
  @Input() is_summaryForm:boolean;
  @ViewChild('summaryFormDir') summaryFormDir:NgForm;
  matcher = new MyErrorStateMatcher();

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.summaryForm = this.fb.group({
      group_name: ['', Validators.required],
      group_address: ['', Validators.required],
      group_staff: ['', Validators.required],
    });
  }
  get controls(){
    return this.summaryForm.controls;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
     if(this.is_summaryForm){
       this.summaryFormDir.resetForm();
       this.summaryForm.reset();
     }
  }
  onSubmitsummaryForm(){
    this.summaryFormEvent.emit(this.summaryForm);
  }
  previous(){
    this.summaryFormPrevious.emit('previous');
  }
}
