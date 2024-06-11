import type { IFetchError } from 'ofetch';

export const handleStoreError = (store: any, error: IFetchError) => {
  if (import.meta.client) {
    store.error = error;
  }

  // eslint-disable-next-line
  console.log(error);
};
