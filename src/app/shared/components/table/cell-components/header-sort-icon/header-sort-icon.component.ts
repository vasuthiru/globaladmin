import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ColDefs, sortDetails } from '../../table.model';

@Component({
  selector: 'app-header-sort-icon',
  templateUrl: './header-sort-icon.component.html',
  styleUrls: ['./header-sort-icon.component.scss']
})
export class HeaderSortIconComponent {
  @Input() column: ColDefs;
  @Input() sortedCol: string;
  @Input() sortOrder: 'asc' | 'desc' | '';

  @Output() sortRequested: EventEmitter<sortDetails> = new EventEmitter<sortDetails>();

  onSortRequested(field: string, sortOrder: 'asc' | 'desc' | '') {
    this.sortRequested.emit({column: field, order: sortOrder});
  }

}
