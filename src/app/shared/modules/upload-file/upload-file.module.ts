import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { UploadFileComponent } from './upload-file.component';



@NgModule({
  declarations: [UploadFileComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    AngularMaterialModule
  ],
  exports:[UploadFileComponent]
})
export class UploadFileModule { }
