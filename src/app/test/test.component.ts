import { Component } from '@angular/core';

import { ColDefs, State, TableColType } from '../shared/components/table/table.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  userData = {
    total_count: 28,
    users: [
      {
        activated: true,
        designation: null,
        email: 'samuel@theimpactworks.com',
        first_name: null,
        id: 2,
        last_name: null,
        location: null,
        mobile_access: true,
        phone_number: null,
        profile_image: {},
        role: {
          name: 'Admin',
          short_name: 'admin',
        },
        status: 'complete',
        user_role: 'Admin',
        userName: 'null null',
        functional_role: '',
        roleStatus: 'adminComplete',
      },
      {
        activated: true,
        designation: null,
        email: 'vikram@theimpactworks.com',
        first_name: null,
        id: 3,
        last_name: null,
        location: null,
        mobile_access: true,
        phone_number: null,
        profile_image: {},
        role: {
          name: 'Admin',
          short_name: 'admin',
        },
        status: 'complete',
        user_role: 'Admin',
        userName: 'null null',
        functional_role: '',
        roleStatus: 'adminComplete',
      },
      {
        activated: true,
        designation: null,
        email: 'admin.gowthami@theimpactworks.com',
        first_name: 'Admin',
        id: 50,
        last_name: 'Gowthami',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          name: 'Admin',
          short_name: 'admin',
        },
        status: 'invited',
        user_role: 'Admin',
        userName: 'Admin Gowthami',
        functional_role: '',
        roleStatus: 'adminInvited',
      },
      {
        activated: true,
        designation: null,
        email: 'admin.ingine@theimpactworks.com',
        first_name: 'admin',
        id: 17,
        last_name: 'ingine',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          name: 'Admin',
          short_name: 'admin',
        },
        status: 'invited',
        user_role: 'Admin',
        userName: 'admin ingine',
        functional_role: '',
        roleStatus: 'adminInvited',
      },
      {
        activated: true,
        designation: null,
        email: 'ds.gowthami@theimpactworks.com',
        first_name: 'D S',
        id: 72,
        last_name: 'Gowthami',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          functional_roles: {
            finance: 'finance',
            h_r: 'h_r',
          },
          name: 'Data Steward',
          primary_functional_role_name: 'finance',
          primary_functional_role_short_name: 'finance',
          short_name: 'data_steward',
        },
        status: 'invited',
        user_role: 'Data Steward',
        userName: 'D S Gowthami',
        functional_role: 'finance, h_r',
        roleStatus: 'adminInvited',
      },
      {
        activated: true,
        designation: null,
        email: 'ds.ingine@theimpactworks.com',
        first_name: 'datasteward',
        id: 34,
        last_name: 'ingine',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          functional_roles: {
            finance: 'finance',
          },
          name: 'Data Steward',
          primary_functional_role_name: 'finance',
          primary_functional_role_short_name: 'finance',
          short_name: 'data_steward',
        },
        status: 'complete',
        user_role: 'Data Steward',
        userName: 'datasteward ingine',
        functional_role: 'finance',
        roleStatus: 'adminComplete',
      },
      {
        activated: true,
        designation: null,
        email: 'fa.gowthami@theimpactworks.com',
        first_name: 'F A',
        id: 52,
        last_name: 'Gowthami',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          functional_roles: {
            h_r: 'h_r',
          },
          name: 'Functional Admin',
          primary_functional_roles: {},
          short_name: 'functional_admin',
        },
        status: 'invited',
        user_role: 'Functional Admin',
        userName: 'F A Gowthami',
        functional_role: 'h_r',
        roleStatus: 'adminInvited',
      },
      {
        activated: true,
        designation: null,
        email: 'fa.ingine@theimpactworks.com',
        first_name: 'functionaladmin',
        id: 58,
        last_name: 'ingine',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          functional_roles: {
            finance: 'finance',
          },
          name: 'Functional Admin',
          primary_functional_roles: {},
          short_name: 'functional_admin',
        },
        status: 'complete',
        user_role: 'Functional Admin',
        userName: 'functionaladmin ingine',
        functional_role: 'finance',
        roleStatus: 'adminComplete',
      },
      {
        activated: true,
        designation: 'HR',
        email: 'gowthami.kondaveeti@gmail.com',
        first_name: 'Gowthami',
        id: 10,
        last_name: 'DS.HR',
        location: 'Andhra Pradesh',
        mobile_access: false,
        phone_number: '6789012345',
        profile_image: {},
        role: {
          functional_roles: {
            h_r: 'h_r',
          },
          name: 'Data Steward',
          primary_functional_role_name: 'h_r',
          primary_functional_role_short_name: 'h_r',
          short_name: 'data_steward',
        },
        status: 'complete',
        user_role: 'Data Steward',
        userName: 'Gowthami DS.HR',
        functional_role: 'h_r',
        roleStatus: 'adminComplete',
      },
      {
        activated: true,
        designation: null,
        email: 'gowthamipendyala27@gmail.com',
        first_name: 'Gowthami',
        id: 9,
        last_name: 'HR123',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          functional_roles: {
            finance: 'finance',
          },
          name: 'Functional Admin',
          primary_functional_roles: {},
          short_name: 'functional_admin',
        },
        status: 'invited',
        user_role: 'Functional Admin',
        userName: 'Gowthami HR123',
        functional_role: 'finance',
        roleStatus: 'adminInvited',
      },
      {
        activated: false,
        designation: 'Manager',
        email: 'gowthamikishan@gmail.com',
        first_name: 'Gowthami',
        id: 8,
        last_name: 'Kishan',
        location: 'Hyderabad',
        mobile_access: false,
        phone_number: '9876567890',
        profile_image: {},
        role: {
          name: 'Viewer',
          short_name: 'viewer',
        },
        status: 'complete',
        user_role: 'Viewer',
        userName: 'Gowthami Kishan',
        functional_role: '',
        roleStatus: 'viewerComplete',
      },
      {
        activated: true,
        designation: null,
        email: 'gowthami.pendyala2@gmail.com',
        first_name: 'Gowthami',
        id: 24,
        last_name: 'P1234',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          name: 'Viewer',
          short_name: 'viewer',
        },
        status: 'invited',
        user_role: 'Viewer',
        userName: 'Gowthami P1234',
        functional_role: '',
        roleStatus: 'viewerInvited',
      },
      {
        activated: true,
        designation: null,
        email: 'gowthami.pendyala@gmail.com',
        first_name: 'Gowthami',
        id: 31,
        last_name: 'Pendyala',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          name: 'Admin',
          short_name: 'admin',
        },
        status: 'invited',
        user_role: 'Admin',
        userName: 'Gowthami Pendyala',
        functional_role: '',
        roleStatus: 'adminInvited',
      },
      {
        activated: true,
        designation: 'Q.A',
        email: 'gowthami@theimpactworks.com',
        first_name: 'Gowthami-',
        id: 4,
        last_name: 'Pendyala',
        location: 'Anantapur',
        mobile_access: true,
        phone_number: '9876543212',
        profile_image: {},
        role: {
          name: 'Admin',
          short_name: 'admin',
        },
        status: 'complete',
        user_role: 'Admin',
        userName: 'Gowthami- Pendyala',
        functional_role: '',
        roleStatus: 'adminComplete',
      },
      {
        activated: true,
        designation: null,
        email: 'harikishan.kvhk@gmail.com',
        first_name: 'Hari',
        id: 7,
        last_name: 'Kishan',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          functional_roles: {
            finance: 'finance',
          },
          name: 'Data Steward',
          primary_functional_role_name: 'finance',
          primary_functional_role_short_name: 'finance',
          short_name: 'data_steward',
        },
        status: 'complete',
        user_role: 'Data Steward',
        userName: 'Hari Kishan',
        functional_role: 'finance',
        roleStatus: 'adminComplete',
      },
      {
        activated: true,
        designation: null,
        email: 'hemanth.donkada@theimpactworks.com',
        first_name: 'Hemanth',
        id: 68,
        last_name: 'Vinay',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          functional_roles: {
            finance: 'finance',
          },
          name: 'Functional Admin',
          primary_functional_roles: {
            finance: 'finance',
          },
          short_name: 'functional_admin',
        },
        status: 'complete',
        user_role: 'Functional Admin',
        userName: 'Hemanth Vinay',
        functional_role: 'finance',
        roleStatus: 'adminComplete',
      },
      {
        activated: true,
        designation: null,
        email: 'jagadeesh@theimpactworks.com',
        first_name: 'Jagadeesh',
        id: 16,
        last_name: 'Reddy',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          name: 'Admin',
          short_name: 'admin',
        },
        status: 'complete',
        user_role: 'Admin',
        userName: 'Jagadeesh Reddy',
        functional_role: '',
        roleStatus: 'adminComplete',
      },
      {
        activated: true,
        designation: null,
        email: 'pooja.sharma@theimpactworks.com',
        first_name: 'pooja',
        id: 70,
        last_name: 'sharma',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          functional_roles: {
            finance: 'finance',
          },
          name: 'Data Steward',
          primary_functional_role_name: 'finance',
          primary_functional_role_short_name: 'finance',
          short_name: 'data_steward',
        },
        status: 'complete',
        user_role: 'Data Steward',
        userName: 'pooja sharma',
        functional_role: 'finance',
        roleStatus: 'adminComplete',
      },
      {
        activated: true,
        designation: 'Q.A',
        email: 'pratheek.kondaveeti@gmail.com',
        first_name: 'Pratheek-',
        id: 6,
        last_name: 'Kondaveeti',
        location: 'Las Vegas',
        mobile_access: false,
        phone_number: '9087654321',
        profile_image: {},
        role: {
          functional_roles: {
            finance: 'finance',
            h_r: 'h_r',
          },
          name: 'Functional Admin',
          primary_functional_roles: {},
          short_name: 'functional_admin',
        },
        status: 'complete',
        user_role: 'Functional Admin',
        userName: 'Pratheek- Kondaveeti',
        functional_role: 'finance, h_r',
        roleStatus: 'adminComplete',
      },
      {
        activated: true,
        designation: null,
        email: 't.samson991234@gmail.com',
        first_name: 'Rishab',
        id: 33,
        last_name: 'pant',
        location: null,
        mobile_access: false,
        phone_number: null,
        profile_image: {},
        role: {
          functional_roles: {
            h_r: 'h_r',
          },
          name: 'Functional Admin',
          primary_functional_roles: {},
          short_name: 'functional_admin',
        },
        status: 'invited',
        user_role: 'Functional Admin',
        userName: 'Rishab pant',
        functional_role: 'h_r',
        roleStatus: 'adminInvited',
      },
    ],
  };

  columnDefs: ColDefs[] = [
    {
      headerName: 'User Name',
      field: 'first_name',
      type: TableColType.AVATARBADGE,
      avatarBadgeParams: { name: 'userName', caption: 'designation' },
      sticky: true,
      reOrder: false,
      hide: false,
      style: {
        'min-width': '250px',
        'max-width': '250px',
        width: '250px',
      },
    },
    { headerName: 'Role', field: 'user_role' },
    { headerName: 'Functional Area', field: 'functional_role', camelCase: true },
    { headerName: 'Location', field: 'location' },
    { headerName: 'Status', field: 'status', camelCase: true },
    {
      headerName: 'Actions',
      field: 'actions',
      type: TableColType.ACTIONS,
      iconDetails: [
        { icon: 'info', text: 'Basic Details' },
        { icon: 'help', text: 'Help' },
        { icon: 'edit', text: 'Edit User Access' },
        { icon: 'delete', text: 'Delete' },
      ],
      sort: false,
      stickyEnd: true,
      reOrder: false,
      hide: false,
      style: {
        'min-width': '120px',
        width: '120px',
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
  pageSize: number = 20;
  state: State = { page: { pageIndex: 1, size: this.pageSize } };
  constructor() {}
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
