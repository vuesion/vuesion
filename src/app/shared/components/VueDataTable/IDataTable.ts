export interface IDataTableHeader {
  [key: string]: IDataTableHeaderItem;
}

export interface IDataTableHeaderItem {
  title?: string;
  visible?: boolean;
  sortKey?: string;
}

export interface IComputedDataRowColumn {
  key: string;
  value: any;
  visible: boolean;
}
