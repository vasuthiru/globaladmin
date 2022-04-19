/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'ga-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit, OnChanges {
  uploadStaff:FormGroup;
  @Output() uploadFormEvent = new EventEmitter<any>();
  @Output() uploadFormPrevious = new EventEmitter<any>();
  @Input() uploadLabel:string;
  @ViewChild('uploadFormDir') uploadFormDir:NgForm;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.uploadStaff = this.fb.group({
      staff_file: ['', Validators.required],
      staff_file_name: ['']
    });
  }
  get staffControls(){
    return this.uploadStaff.controls;
  }
  getFileInput(data:any){
    let selectedFile = data.target.files;
    // console.log(selectedFile.item(0), 'testing')
    this.uploadStaff.patchValue({
      staff_file: selectedFile.item(0),
      staff_file_name: selectedFile.item(0).name
    })
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnChanges(_changes: SimpleChanges): void {

  }
  OnSubmitStaffForm(){
    this.uploadFormEvent.emit(this.uploadStaff);
    // if(this.uploadStaff.valid){
    //   this.uploadFormEvent.emit(this.uploadStaff.value);
    // }
  }
  previous(){
    this.uploadFormPrevious.emit('previous');
  }
}
