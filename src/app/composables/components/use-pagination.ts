import { ref } from 'vue';

export const usePagination = (cb: () => Promise<void>, initialItemsPerPage: 5 | 10 | 25 | 50 | 100) => {
  const selectedPage = ref(1);
  const itemsPerPage = ref<number>(initialItemsPerPage);
  const onSelectedPageChange = async (page: number) => {
    selectedPage.value = page;

    await cb();
  };
  const onItemsPerPageChange = async (amount: number) => {
    selectedPage.value = 1;
    itemsPerPage.value = amount;

    await cb();
  };

  return {
    selectedPage,
    itemsPerPage,
    onSelectedPageChange,
    onItemsPerPageChange,
  };
};
