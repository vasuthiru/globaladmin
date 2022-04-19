import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AvatarModule } from 'ngx-avatar';



import { ActionsComponent } from './cell-components/actions/actions.component';
import { AvatarBadgeComponent } from './cell-components/avatar-badge/avatar-badge.component';
import { ColListDialogComponent } from './cell-components/col-list-dialog/col-list-dialog.component';
import { DatesComponent } from './cell-components/dates/dates.component';
import { HeaderSortIconComponent } from './cell-components/header-sort-icon/header-sort-icon.component';
import { StatusImageComponent } from './cell-components/status-image/status-image.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    TableComponent,
    AvatarBadgeComponent,
    ActionsComponent,
    ColListDialogComponent,
    HeaderSortIconComponent,
    StatusImageComponent,
    DatesComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    AvatarModule,
    MatTooltipModule,
    MatSortModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  exports: [TableComponent],
})
export class TableModule {}
