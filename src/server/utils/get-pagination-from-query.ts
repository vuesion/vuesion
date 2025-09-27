import type { IPaginationQueryParameters } from '#shared/interfaces/IPaginationQueryParameters';

export const getPaginationFromQuery = (query: IPaginationQueryParameters, selectedPage = 1, itemsPerPage = 5) => {
  selectedPage = parseInt(query?.selectedPage?.toString() || selectedPage.toString(10), 10);
  itemsPerPage = parseInt(query?.itemsPerPage?.toString() || itemsPerPage.toString(10), 10);

  return {
    take: itemsPerPage,
    skip: (selectedPage - 1) * itemsPerPage,
    selectedPage,
    itemsPerPage,
  };
};
