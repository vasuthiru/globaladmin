import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDataComponent } from './profile-data.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReplaceFilterModule } from '../../pipes/replace-filter/replace-filter.module';



@NgModule({
  declarations: [ProfileDataComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    ReplaceFilterModule
  ],
  exports:[ProfileDataComponent]
})
export class ProfileDataModule { }
