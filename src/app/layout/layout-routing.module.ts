import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path:'', 
    component:LayoutComponent,
    children:[
      { path:'', redirectTo:'home', pathMatch:'full' },
      { path:'home', loadChildren:()=>import('../modules/home/home.module').then(m=>m.HomeModule) },
      { path:'school-list', loadChildren:()=>import('../modules/school/schools-list/schools-list.module').then(m=>m.SchoolsListModule)}
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
