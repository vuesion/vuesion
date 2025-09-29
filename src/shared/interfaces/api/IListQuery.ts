type DefaultListFields = 'createdAt' | 'updatedAt' | 'name';
type SortDir = 'asc' | 'desc';

export interface IListQuery<TFields extends string = DefaultListFields> {
  q?: string;
  sort?: `${TFields}:${SortDir}`;
  selectedPage?: number;
  itemsPerPage?: number;
}
