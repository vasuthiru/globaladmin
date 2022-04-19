import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IconData, IconAction } from '../../table.model';
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent<T> {
  @Input() iconsDetails: IconData[];
  @Input() rowData: T[];
  @Input() config?: string[];
  @Output() iconClicked: EventEmitter<IconAction> = new EventEmitter<IconAction>();

  iconAction(event: MouseEvent, icon: string): void {
    this.iconClicked.emit({ action: icon, rowData: this.rowData });
    event.stopPropagation();
  }
}
