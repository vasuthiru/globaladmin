import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { ColListDialogComponent } from '../cell-components/col-list-dialog/col-list-dialog.component';
import { ColDefs, IconAction, sortDetails, State } from '../table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit, OnChanges {
  @Input() colDef: ColDefs[];
  @Input() data: T[];
  @Input() totalRows: number = 0;
  @Input() pageSize: number = 20;
  @Input() rowClickable?: boolean = false;
  @Output() iconClicked: EventEmitter<IconAction> = new EventEmitter<IconAction>();
  @Output() stateChanged: EventEmitter<State> = new EventEmitter<State>();
  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('table') tableRef: ElementRef;
  @ViewChild(MatTable, { read: ElementRef }) private matTableRef: ElementRef;
  dataSource: MatTableDataSource<T>;
  displayedColumns: string[] = [];
  state: State = {};
  sortedCol: string = '';
  sortOrder: 'asc' | 'desc' | '' = '';
  scrollActive: boolean = false;
  isLoadingResults = true;
  rowIndex: number;
  notSameSelection: boolean = false;

  columns: ColDefs[] = [];

  constructor(private dialog: MatDialog, private renderer: Renderer2) {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  iconAction($event: IconAction): void {
    this.iconClicked.emit($event);
  }
  setcolumns() {
    for (const col of this.colDef) {
      col.width = col.width ? col.width : 'auto';
      col.visible = Object.prototype.hasOwnProperty.call(col, 'visible') ? col.visible : true;

      this.columns.push(col);
    }
    this.setDisplayedColumns();
  }
  setDisplayedColumns() {
    this.displayedColumns = [];
    this.columns.forEach((column) => {
      if (column.visible) {
        this.displayedColumns.push(column.field);
      }
    });
  }
  onTableScroll(e: any): void {
    const tableScrollEnd = e.target.offsetHeight + e.target.scrollTop + 1 >= e.target.scrollHeight;
    const hasRows = this.totalRows > this.dataSource.data.length;
    if (tableScrollEnd && hasRows && !this.isLoadingResults) {
      this.state.page = {
        pageIndex: Math.round(this.dataSource.data.length / this.pageSize) + 1,
        size: this.pageSize,
      };
      this.scrollActive = true;
      this.isLoadingResults = true;
      this.stateChanged.emit(this.state);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue !== undefined) {
      this.afterDataLoad();
    }
    if (changes['colDef']) {
      this.setcolumns();
    }
  }
  afterDataLoad() {
    const data: T[] = this.dataSource && this.scrollActive ? [...this.dataSource.data, ...this.data] : this.data;
    // const data : T[] = [];
    this.dataSource = new MatTableDataSource(data);
    this.scrollActive = false;
    this.isLoadingResults = false;
  }
  onSortRequested(sortEvent: sortDetails) {
    this.tableRef.nativeElement.scrollTop = 0;
    if (sortEvent.order) {
      this.sortedCol = sortEvent.column;
      this.sortOrder = sortEvent.order;
      this.state.page = {
        pageIndex: 1,
        size: this.pageSize,
      };
      this.state.sort = {
        column: sortEvent.column,
        order: sortEvent.order,
      };
    } else {
      this.sortedCol = '';
      this.sortOrder = '';
      delete this.state.sort;
    }
    // this.isLoadingResults = true;
    this.stateChanged.emit(this.state);
  }

  openColumnDialog() {
    const dialogRef = this.dialog.open(ColListDialogComponent, {
      maxHeight: '100vh',
      height: '100%',
      width: '300px',
      panelClass: 'full-screen-modal',
      position: {
        top: '0px',
        right: '0px',
      },
      data: {
        displayColumns: this.columns,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.columns = result.columns;
        this.setDisplayedColumns();
      }
    });
  }
  valueCheck(column: any, field: string, child?: string): boolean {
    if (child) {
      if (column[field]) {
        return Object.prototype.hasOwnProperty.call(column[field], child) ? column[field][child] : true;
      } else {
        return false;
      }
    } else {
      return Object.prototype.hasOwnProperty.call(column, field) ? column[field] : true;
    }
  }

  noDataCheck(data: any, field: string) {
    return data[field] ? data[field] : '━';
  }

  configValues(rowData: any, column: any, field: any) {
    if (column['configField'] && column['config']) {
      const config = rowData[column['configField']] && column['config'][rowData[column['configField']]][field];
      return config ? config : false;
    } else {
      return false;
    }
  }

  rowClick(data: any) {
    this.notSameSelection = this.rowIndex === data.id ? false : true;
    this.rowIndex = data.id;
    this.rowClicked.emit({ data: data, newRow: this.notSameSelection });
  }

  /* Re-size colums code...


  pressed = false;
  currentResizeIndex: number;
  startX: number;
  startWidth: number;
  isResizingRight: boolean;
  resizableMousemove: () => void;
  resizableMouseup: () => void;
  ngAfterViewInit() {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
  }
  setTableResize(tableWidth: number) {
    let totWidth = 0;
    this.columns.forEach((column) => {
      totWidth += column.width;
    });
    const scale = (tableWidth - 5) / totWidth;
    this.columns.forEach((column) => {
      column.width *= scale;
      this.setColumnWidth(column);
    });
  }

  onResizeColumn(event: any, index: number) {
    this.checkResizing(event, index);
    this.currentResizeIndex = index;
    this.pressed = true;
    this.startX = event.pageX;
    this.startWidth = event.target.parentElement.clientWidth;
    event.preventDefault();
    this.mouseMove(index);
  }

  resizeClicked(event) {
    event.stopPropagation();
  }

  private checkResizing(event, index) {
    const cellData = this.getCellData(index);
    if (
      index === 0 ||
      (Math.abs(event.pageX - cellData.right) < cellData.width / 2 && index !== this.columns.length - 1)
    ) {
      this.isResizingRight = true;
    } else {
      this.isResizingRight = false;
    }
  }

  private getCellData(index: number) {
    const headerRow = this.matTableRef.nativeElement.children[0].querySelector('tr');
    const cell = headerRow.children[index];
    return cell.getBoundingClientRect();
  }

  mouseMove(index: number) {
    this.resizableMousemove = this.renderer.listen('document', 'mousemove', (event) => {
      if (this.pressed && event.buttons) {
        const dx = this.isResizingRight ? event.pageX - this.startX : -event.pageX + this.startX;
        const width = this.startWidth + dx;
        if (this.currentResizeIndex === index && width > 50) {
          this.setColumnWidthChanges(index, width);
        }
      }
    });
    this.resizableMouseup = this.renderer.listen('document', 'mouseup', (event) => {
      if (this.pressed) {
        this.pressed = false;
        this.currentResizeIndex = -1;
        this.resizableMousemove();
        this.resizableMouseup();
      }
    });
  }

  setColumnWidthChanges(index: number, width: number) {
    const orgWidth = this.columns[index].width;
    const dx = width - orgWidth;
    if (dx !== 0) {
      const j = this.isResizingRight ? index + 1 : index - 1;
      const newWidth = this.columns[j].width - dx;
      if (newWidth > 50) {
        this.columns[index].width = width;
        this.setColumnWidth(this.columns[index]);
        this.columns[j].width = newWidth;
        this.setColumnWidth(this.columns[j]);
      }
    }
  }

  setColumnWidth(column: any) {
    const columnEls = Array.from(document.getElementsByClassName('mat-column-' + column.field));
    columnEls.forEach((el: HTMLDivElement) => {
      el.style.width = column.width + 'px';
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setTableResize(this.matTableRef.nativeElement.clientWidth);
  }
 */
}
