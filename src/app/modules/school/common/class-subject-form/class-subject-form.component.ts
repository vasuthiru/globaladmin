/* eslint-disable no-console */
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { MyErrorStateMatcher } from '../../../../shared/utilityclass/error.statematcher';

import { ClassList } from './class.list';

@Component({
  selector: 'ga-class-subject',
  templateUrl: './class-subject-form.component.html',
  styleUrls: ['./class-subject-form.component.scss']
})
export class ClassSubjectFormComponent implements OnInit {
  // @Output() classSelection = new EventEmitter<any>();
  @Output() classSubjectFormEvent = new EventEmitter<any>();
  custom_selectedClass = 'Select Class';
  // selected_class = new FormControl('');
  classes = [...ClassList];
  subjects = [
    {name:'maths'},
    {name:'science'},
    {name:'socila'},
  ];
  is_opened = false;

  selectedCls = 13;
  defaultItem:'no class';
  classSubjectForm: FormGroup;
  sectionChecker:boolean;
  @ViewChild('formDir') formDir: NgForm;
  matcher = new MyErrorStateMatcher();

  constructor(private _fb:FormBuilder, private _cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.classSubjectForm = this._fb.group({
      class_select: ['', Validators.required],
      subject_select: ['', Validators.required],
      section_select: [Boolean, Validators.required],      
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSelectChange(event:any){  
    // eslint-disable-next-line no-undef
    console.log(this.classSubjectForm.value.class_select)

    // this.classSelection.emit(this.classSubjectForm.value.class_select);
  }
  
  getSectionSelection(classSections:any){
    this._cd.detectChanges();
    let sectionBoolArr:any[] = [];
    classSections.forEach((cl:any)=>{
      cl.sections.forEach((sec:any)=>{
        // console.log(sec, 'kkkk')
        sectionBoolArr.push(sec.is_checked)
      });
    });
    this.sectionChecker = sectionBoolArr.includes(true);
    this.classSubjectForm.patchValue({
      section_select: this.sectionChecker
    });
  }
  onSubmitClassSubject(){
    if(this.classSubjectForm.valid){
      // eslint-disable-next-line no-undef
      console.log(this.classSubjectForm.value, this.classes)
    }
    this.classSubjectFormEvent.emit(this.classSubjectForm)
  }
  // selectClassItem(item:any){
  //   this.classes.map(res=>{
  //     if(res.id===item.id){
  //       res.is_selected = !res.is_selected;
  //       this.custom_selectedClass = res.id.toString()
  //     }
  //   })
  // }

  // openDropDown(){
  //   this.is_opened = !this.is_opened;
  // }
  
}
