import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchoolAddFactoryComponent } from './school-add-factory/school-add-factory.component';
import { SchoolComponent } from './school.component';

const routes: Routes = [
  { path:'', 
    component:SchoolComponent,
    children:[
      { path:'', redirectTo:'add' },
      { path:'add', component:SchoolAddFactoryComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
