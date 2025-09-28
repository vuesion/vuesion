import type { IPaginationQueryParameters } from '#shared/interfaces/IPaginationQueryParameters';

type DefaultListFields = 'createdAt' | 'updatedAt' | 'name';
type SortDir = 'asc' | 'desc';

export interface IListQuery<TFields extends string = DefaultListFields> extends IPaginationQueryParameters {
  q?: string;
  sort?: `${TFields}:${SortDir}`;
}
