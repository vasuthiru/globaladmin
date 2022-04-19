/* eslint-disable no-console */
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent  {

  constructor(private location:Location, private dialog:MatDialog) { }

  

  goBack(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '320px',
      data: {title:'confirm',text:'are you sure, you want to leave'},
    });  
    dialogRef.afterClosed().subscribe(result => {
      // eslint-disable-next-line no-undef
      console.log('The dialog was closed', result);  
      if(result==='yes'){
        this.location.back();
      }
    });
  }
}
