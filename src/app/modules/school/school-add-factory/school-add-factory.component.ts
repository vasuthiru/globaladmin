import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-school-add-factory',
  templateUrl: './school-add-factory.component.html',
  styleUrls: ['./school-add-factory.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class SchoolAddFactoryComponent  {
  isLinear = true;
  basicDetails: FormGroup;
  secondFormGroup: FormGroup;
  selectedIndex = 0;
  is_uploadForm_submitted = false;
  is_summaryForm=false;
  flexPercentage = 45;
  selectedClass:number;
  @ViewChild('stepper') stepper:MatStepper;
  multiSelection =[
    {class:1, sections:[
      {}
    ]}
  ]
  constructor(private router: Router, private dialog:MatDialog) { }


  stepChange(eve:any){
    // console.log(eve, 'sdfd')
  }
  formSubmit(e:any){
    if(e.valid){
      this.stepper.next();
      this.selectedIndex = this.stepper.selectedIndex;
    }
  }

  // getClassSelection(e:number){
  //   this.selectedClass = e;
  // }
  classSubjectFormSubmit(e:any){
    if(e.valid){
      this.stepper.next();
      this.selectedIndex = this.stepper.selectedIndex;
    }
  }
  uploadFileSubmit(e:any){
    if(e.valid){
      this.stepper.next();
      this.selectedIndex = this.stepper.selectedIndex;
      this.is_summaryForm=true;
    }
  }
  uploadFilePrevious(e:any){
    this.stepper.selected?.completed;
    this.stepper.previous();
    this.selectedIndex = this.stepper.selectedIndex;
  }
  schoolFormEvent(e:NgForm){
    if(e.valid){
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '320px',
        data: {title: 'summaryForm', text: 'School Name', actionText:'has been added'},
      });
      dialogRef.afterClosed().subscribe(result => {
        if(typeof result === 'string'){
          if(result === 'home'){
            this.router.navigate([result]);
          }
        }
      });
    }
  }
  summaryFormPrevious(e:string){
    this.stepper.selected?.completed;
    this.stepper.previous();
    this.selectedIndex = this.stepper.selectedIndex;
  }
}
