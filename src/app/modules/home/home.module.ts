import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from '../../shared/components/table/table.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule
  ]
})
export class HomeModule { }
