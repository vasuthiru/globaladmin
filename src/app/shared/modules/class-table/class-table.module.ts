import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { ClassTableComponent } from './class-table.component';


@NgModule({
  declarations: [ClassTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  exports:[ClassTableComponent]
})
export class ClassTableModule { }
