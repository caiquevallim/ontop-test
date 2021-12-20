export enum TableColumnSizes {
  colMd1 = 'col-md-1',
  colMd2 = 'col-md-2',
  colMd3 = 'col-md-3',
  colMd4 = 'col-md-4',
  colMd5 = 'col-md-5',
  colMd6 = 'col-md-6',
  colMd7 = 'col-md-7',
  colMd8 = 'col-md-8',
  colMd9 = 'col-md-9',
  colMd10 = 'col-md-10',
  colMd11 = 'col-md-11',
  colMd12 = 'col-md-12',
}
export enum TableColumnTypes {
  text,
  badge,
  icon,
  actions,
}
export interface TableColumnInterface {
  key: string;
  description: string;
  type: TableColumnTypes;
  icon?: string;
  colSize: string;
}
export interface TableInterface {
  columns: TableColumnInterface[];
  data: any[];
}
