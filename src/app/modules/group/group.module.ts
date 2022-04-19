import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { UploadFileModule } from '../../shared/modules/upload-file/upload-file.module';

import { BasicdetailsFormComponent } from './common/basicdetails-form/basicdetails-form.component';
import { SummaryFormComponent } from './common/summary-form/summary-form.component';
import { GroupAddFactoryComponent } from './group-add-factory/group-add-factory.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';


@NgModule({
  declarations: [
    GroupComponent,
    GroupAddFactoryComponent,
    BasicdetailsFormComponent,
    SummaryFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    GroupRoutingModule,
    MatStepperModule,
    AngularMaterialModule,
    UploadFileModule
  ]
})
export class GroupModule { }
