import { TableColType } from '../../shared/components/table/table.model';

export const columnDefs = [
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