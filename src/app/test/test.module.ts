import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableModule } from '../shared/components/table/table.module';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    TableModule
  ]
})
export class TestModule { }
