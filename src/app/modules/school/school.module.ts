import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

import { AngularMaterialModule } from '../../shared/modules/angular-material/angular-material.module';
import { ClassTableModule } from '../../shared/modules/class-table/class-table.module';
import { UploadFileModule } from '../../shared/modules/upload-file/upload-file.module';
import { ReplaceFilterModule } from '../../shared/pipes/replace-filter/replace-filter.module';

import { ClassSubjectFormComponent } from './common/class-subject-form/class-subject-form.component';
import { SchoolBasicDetailsFormComponent } from './common/school-basic-details-form/school-basic-details-form.component';
import { SchoolSummaryFormComponent } from './common/school-summary-form/school-summary-form.component';
import { SchoolAddFactoryComponent } from './school-add-factory/school-add-factory.component';
import { SchoolRoutingModule } from './school-routing.module';
import { SchoolComponent } from './school.component';

@NgModule({
  declarations: [
    SchoolComponent,
    SchoolAddFactoryComponent,
    SchoolBasicDetailsFormComponent,
    SchoolSummaryFormComponent,
    ClassSubjectFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    ClassTableModule,
    AngularMaterialModule,
    UploadFileModule,
    SchoolRoutingModule,
    // ReplacefilterModule
    ReplaceFilterModule
  ]
})
export class SchoolModule { }
