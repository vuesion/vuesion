export interface IPaginatedResponse<T> {
  records: Array<T>;
  selectedPage: number;
  itemsPerPage: number;
  totalRecords: number;
}
