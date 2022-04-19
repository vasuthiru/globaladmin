import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ColDefs, State, TableColType } from '../../../shared/components/table/table.model';

import { UserData } from './userdata';

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.scss'],
})
export class SchoolsListComponent {
  userData = UserData;
  columnDefs: ColDefs[] = [
    { headerName: 'Group Id', field: 'user_role' },
    { headerName: 'Group Name', field: 'functional_role', camelCase: true },
    { headerName: 'Location', field: 'location' },
    { headerName: 'Status', field: 'status', camelCase: true },
    {
      headerName: 'Actions',
      field: 'actions',
      type: TableColType.ACTIONS,
      iconDetails: [
        { icon: 'remove_red_eye', text: 'View' },
        { icon: 'edit', text: 'Edit Group' },
      ],
      sort: false,
      stickyEnd: true,
      reOrder: false,
      hide: false,
      style: {
        'min-width': '60px',
        width: '60px',
      },
    },
    {
      headerName: '+',
      field: 'col-list',
      type: TableColType.COLSLIST,
      sort: false,
      reOrder: false,
      hide: false,
      stickyEnd: true,
    },
  ];
  pageSize: number = 10;
  state: State = { page: { pageIndex: 1, size: this.pageSize } };
  constructor(private router: Router) {}
  iconClickedHome(e: any) {
    if (e.action === 'remove_red_eye') {
      this.router.navigate(['school-list'], { queryParams: { id: e.rowData.id } });
    } else {
      this.router.navigate(['group/add'], { queryParams: { type: 'edit' } });
    }
  }
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  userName?: string;
  role: IRole;
  designation: string;
  functional_role?: string;
  email: string;
  location: string;
  phone?: string;
  profileImage?: string;
  status?: string;
  fullName?: string;
  user_role?: string;
  is_primary?: boolean;
  responsibilityString?: string;
  responsibility?: string;
  functionalRoles?: string[];
  assignee?: string;
  activated?: boolean;
  mobile_access?: boolean;
  roleStatus?:
    | 'viewerInvited'
    | 'viewerComplete'
    | 'adminInvited'
    | 'adminComplete'
    | 'viewerInActive'
    | 'adminInActive';
}

export interface IUserHttpRes {
  users: IUser[];
  total_count: number;
}

export interface IRole {
  functional_roles: {
    [key: string]: string;
  };
  name: string;
  primary_functional_roles: {
    [key: string]: string;
  };
  primary_functional_role_short_name?: string;
  short_name: string;
}
