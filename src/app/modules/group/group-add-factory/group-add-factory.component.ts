import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { GroupService } from '../group.service';

/**
 * @title Stepper overview
 */

@Component({
  selector: 'app-group-add-factory',
  templateUrl: './group-add-factory.component.html',
  styleUrls: ['./group-add-factory.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class GroupAddFactoryComponent implements OnInit {
  isLinear = true;
  basicDetails: FormGroup;
  secondFormGroup: FormGroup;
  selectedIndex = 0;
  is_uploadForm_submitted = false;
  is_summaryForm=false;
  steppercontentHeight = 45;
  @ViewChild('stepper') stepper:MatStepper;
  constructor(private _formBuilder: FormBuilder, private dialog:MatDialog, private router:Router, private _gs:GroupService, private _ar:ActivatedRoute) {}

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    // console.log(window.innerWidth, 'lkjhk')
  }
  stepChange(eve:any){
    // console.log(eve, 'sdfd')
  }
  formSubmit(e:any){
    this._ar.queryParams.subscribe((params:Params)=>{
      if(e.valid){
        if('type' in params){
          if(params['type']==='edit'){
            this._gs.editAddGroupBasicDetails(e.value, params['id']).subscribe((res:any)=>{
              // console.log('imaga')
              this.stepper.next();
              this.selectedIndex = this.stepper.selectedIndex;
            });  
          }else{
            this._gs.postAddGroupBasicDetails(e.value).subscribe((res:any)=>{
              // console.log('imaga')
              this.stepper.next();
              this.selectedIndex = this.stepper.selectedIndex;
            });  
          }
        }
            
        
      }
      
    })
    
  }
  uploadFormSubmit(e:any){
    
    if(e.valid){
      this._ar.queryParams.subscribe((params:Params)=>{
        if('id' in params){
          const formData = new FormData();
          formData.append('file', e.value.staff_file);
          this._gs.uploadStaff(params['id'], formData).subscribe((res:any)=>{
            console.log('pppp', res)
          });
        }
  
      });
      this.stepper.next();
      this.selectedIndex = this.stepper.selectedIndex;
      this.is_summaryForm=true;
    }
  }
  uploadFormPrevious(e:string){
    this.stepper.selected?.completed;
    this.stepper.previous();
    this.selectedIndex = this.stepper.selectedIndex;
  }
  summaryFormSubmit(e:NgForm){
    if(e.valid){
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        width: '320px',
        data: {title: 'summaryForm', text: 'Group Name', actionText:'has been added'},
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
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    // eslint-disable-next-line no-undef
    var r:any = document.querySelector(':root');

    // eslint-disable-next-line no-undef
    r.style.setProperty('--steppercontentHeight', window.innerHeight+'px');
    // eslint-disable-next-line no-undef
    if(window.innerWidth<968){
      this.steppercontentHeight = 100;
    }else{
      this.steppercontentHeight = 50;
    }
  }
}

