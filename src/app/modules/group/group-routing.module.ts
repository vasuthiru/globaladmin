import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupAddFactoryComponent } from './group-add-factory/group-add-factory.component';
import { GroupComponent } from './group.component';

const routes: Routes = [
  { path:'', 
    component:GroupComponent,
    children:[
      { path:'', redirectTo:'add' },
      { path:'add', component:GroupAddFactoryComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
