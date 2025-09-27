import { ref } from 'vue';
import type { IPaginationQueryParameters } from '#shared/interfaces/IPaginationQueryParameters';

export const usePagination = (
  cb: (params: IPaginationQueryParameters) => Promise<void>,
  initialItemsPerPage: 5 | 10 | 25 | 50 | 100,
) => {
  const selectedPage = ref(1);
  const itemsPerPage = ref<number>(initialItemsPerPage);
  const onSelectedPageChange = async (page: number) => {
    selectedPage.value = page;

    await cb({ selectedPage: selectedPage.value, itemsPerPage: itemsPerPage.value });
  };
  const onItemsPerPageChange = async (amount: number) => {
    selectedPage.value = 1;
    itemsPerPage.value = amount;

    await cb({ selectedPage: selectedPage.value, itemsPerPage: itemsPerPage.value });
  };

  return {
    selectedPage,
    itemsPerPage,
    onSelectedPageChange,
    onItemsPerPageChange,
  };
};
