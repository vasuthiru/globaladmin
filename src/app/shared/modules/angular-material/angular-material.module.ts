import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// Imports of used components


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
    MatCardModule,
    FlexLayoutModule,
    MatRadioModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule,
    MatSelectModule,
    MatPseudoCheckboxModule,
    MatRadioModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatCardModule,

    FlexLayoutModule,
    HttpClientModule
  ],
  declarations: []
})

export class AngularMaterialModule {
  svgs:any[] = [
    {path:'assets/svgs/icons/add_plus_primary.svg',name:'plus_primary'},
    {path:'assets/svgs/hover_icons/hover_add_plus_primary.svg',name:'hover_plus_primary'},
    {path:'assets/svgs/active_icons/active_add_plus_primary.svg',name:'active_plus_primary'},
    {path:'assets/svgs/icons/add_plus_secondary.svg',name:'plus_secondary'},
    {path:'assets/svgs/hover_icons/hover_add_plus_secondary.svg',name:'hover_plus_secondary'},
    {path:'assets/svgs/icons/addfile_circle.svg',name:'addfile_circle'},
    {path:'assets/svgs/hover_icons/hover_addfile_circle.svg',name:'hover_addfile_circle'},
    {path:'assets/svgs/icons/bell.svg',name:'bell'},
    {path:'assets/svgs/hover_icons/hover_bell.svg',name:'hover_bell'},
    {path:'assets/svgs/active_icons/active_bell.svg',name:'active_bell'},
    {path:'assets/svgs/icons/eye.svg',name:'eye'},
    {path:'assets/svgs/hover_icons/hover_eye.svg',name:'hover_eye'},
    {path:'assets/svgs/active_icons/active_eye.svg',name:'active_eye'},
    {path:'assets/svgs/icons/home.svg',name:'home'},
    {path:'assets/svgs/hover_icons/hover_home.svg',name:'hover_home'},
    {path:'assets/svgs/active_icons/active_home.svg',name:'active_home'},
    {path:'assets/svgs/icons/graduation-cap.svg',name:'graduation-cap'},
    {path:'assets/svgs/hover_icons/hover_graduation-cap.svg',name:'hover_graduation-cap'},
    {path:'assets/svgs/active_icons/active_graduation-cap.svg',name:'active_graduation-cap'},
    {path:'assets/svgs/icons/align-left.svg',name:'align-left'},
    {path:'assets/svgs/hover_icons/hover_align-left.svg',name:'hover_align-left'},
    {path:'assets/svgs/active_icons/active_align-left.svg',name:'active_align-left'},
    {path:'assets/svgs/icons/tick.svg',name:'tick'},
    {path:'assets/svgs/icons/arrow_left_primary.svg',name:'arrow_left_primary'},
    {path:'assets/svgs/icons/circleimage.svg',name:'circleimage'},

    // {path:'assets/svgs/bg-plus.svg',name:'bg-plus'},
    // {path:'assets/svgs/hamberger-menu.svg',name:'hamberger_menu'},
    // {path:'assets/svgs/bell.svg',name:'bell'},
    // {path:'assets/svgs/eye.svg',name:'eye'},
    // {path:'assets/svgs/graduation-cap.svg',name:'graduation_cap'},
    // {path:'assets/svgs/graduation-cap_active.svg',name:'graduation_cap_active'},
    // {path:'assets/svgs/home_active.svg',name:'home_active'},
    // {path:'assets/svgs/home.svg',name:'home'},
    // {path:'assets/svgs/circlepic.svg',name:'circlepic'},
    // {path:'assets/svgs/search.svg',name:'search'},
  ];
  constructor(public matIconRegistry: MatIconRegistry, private domsanitiser:DomSanitizer) {
    this.svgs.forEach(element => {
      this.matIconRegistry.addSvgIcon(
        element.name,
        this.domsanitiser.bypassSecurityTrustResourceUrl(element.path));
    });
  }
  static forRoot(): ModuleWithProviders<AngularMaterialModule> {
    return {
      ngModule: AngularMaterialModule,
      providers: [MatIconRegistry]
    };
  }
}
