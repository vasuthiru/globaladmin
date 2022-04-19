import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ColDefs } from '../../table.model';

@Component({
  selector: 'app-col-list-dialog',
  templateUrl: './col-list-dialog.component.html',
  styleUrls: ['./col-list-dialog.component.scss'],
})
export class ColListDialogComponent implements OnInit {
  displayColumns: ColDefs[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<ColListDialogComponent>) {
    this.displayColumns = this.data.displayColumns.map((a: ColDefs) => {
      return { ...a };
    });
  }

  drop(event: CdkDragDrop<ColDefs[]>) {

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  applyChanges() {
    this.dialogRef.close({ columns: this.displayColumns});
  }

  ngOnInit(): void {
    this.dialogRef.afterClosed().subscribe(() => {
      this.displayColumns = this.data.displayColumns.map((a: ColDefs) => {
        return { ...a };
      });
    });
  }
}
