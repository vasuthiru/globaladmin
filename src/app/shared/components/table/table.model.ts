export interface IconData {
  icon: string;
  text: string;
}
export interface IconAction {
  rowData: any;
  action: string;
}

export interface ColDefs {
  headerName: string;
  field: string;
  type?: TableColType;
  avatarBadgeParams?: AvatarBadge;
  iconDetails?: IconDetails[];
  sticky?: boolean;
  stickyEnd?: boolean;
  sort?: boolean;
  filter?: boolean;
  width?: number | string;
  resize?: boolean;
  index?: number;
  reOrder?: boolean;
  /** column visible on table default ture*/
  visible?: boolean;
  /** column can  hide default true*/
  hide?: boolean;
  /** camelcase pipe */
  camelCase?: boolean;
  style?: {
    [key: string]: string
  },
  config?: config,
  configField?: string
}

export interface config {
  [key: string]: {
    values?: string[],
    image?: string
  }

}

export interface AvatarBadge {
  name: string;
  caption?: string;
  shape?: string;
  img?: string;
  avatar?: boolean;
  imageUrl?: string
}

export interface IconDetails {
  icon: string;
  text: string;
}

export enum TableColType {
  STRING = 'string',
  AVATARBADGE = 'avatar-badge',
  ACTIONS = 'actions',
  COLSLIST = 'cols-list',
  STATUSIMAGE = 'status-image',
  HTMLCONTENT = 'html-content',
  DATE = 'dates'
}

export interface State {
  page?: {
    rowIndex?: number;
    pageIndex: number;
    size?: number;
  };
  sort?: sortDetails;
  filter?: {
    column: string;
    values?: string[];
    matchValue?: string;
  }[];
}

export interface sortDetails {
  column: string;
  order: 'asc' | 'desc' | '';
}
