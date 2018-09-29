export interface IDataTableHeader {
  [key: string]: IDataTableHeaderItem;
}

export interface IDataTableHeaderItem {
  title?: string;
  visible?: boolean;
  sortKey?: string;
  templateName?: string;
}

export interface IComputedDataRowCell {
  key: string;
  value: any;
  visible: boolean;
  templateName?: string;
}
