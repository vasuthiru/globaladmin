import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from '../../../shared/components/table/table.module';
import { ProfileDataModule } from '../../../shared/modules/profile-data/profile-data.module';


import { SchoolsListRoutingModule } from './schools-list-routing.module';
import { SchoolsListComponent } from './schools-list.component';


@NgModule({
  declarations: [SchoolsListComponent],
  imports: [
    CommonModule,
    SchoolsListRoutingModule,
    ProfileDataModule,
    TableModule
  ]
})
export class SchoolsListModule { }
