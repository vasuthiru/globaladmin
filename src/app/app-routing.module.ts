import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'', loadChildren:()=>import('./layout/layout.module').then(m=>m.LayoutModule), canActivate:[AuthGuard] },
  { path:'group', loadChildren:()=>import('./modules/group/group.module').then(m=>m.GroupModule), canActivate:[AuthGuard] },
  { path:'school', loadChildren:()=>import('./modules/school/school.module').then(m=>m.SchoolModule) , canActivate:[AuthGuard]},
  { path:'login', loadChildren:()=>import('./modules/login/login.module').then(m=>m.LoginModule) },
  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
