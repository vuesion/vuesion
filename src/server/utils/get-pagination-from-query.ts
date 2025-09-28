import type { IPaginationQueryParameters } from '#shared/interfaces/api/IPaginationQueryParameters';

export const getPaginationFromQuery = (
  query: IPaginationQueryParameters,
  selectedPageDefault = 1,
  itemsPerPageDefault = 5,
) => {
  const rawPage = query?.selectedPage?.toString();
  const rawSize = query?.itemsPerPage?.toString();

  let selectedPage = parseInt(rawPage ?? '', 10);
  if (Number.isNaN(selectedPage)) {
    selectedPage = selectedPageDefault;
  }

  let itemsPerPage = parseInt(rawSize ?? '', 10);
  if (Number.isNaN(itemsPerPage)) {
    itemsPerPage = itemsPerPageDefault;
  }

  return {
    take: itemsPerPage,
    skip: (selectedPage - 1) * itemsPerPage,
    selectedPage,
    itemsPerPage,
  };
};
