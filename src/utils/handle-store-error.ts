import type { IFetchError } from 'ofetch';
import type { Store } from 'pinia';

interface StoreWithError extends Store {
  error?: IFetchError;
}

export const handleStoreError = (store: StoreWithError, error: IFetchError) => {
  if (import.meta.client) {
    store.error = error;
  }

  console.log(error);
};
