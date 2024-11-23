import type { IFetchError } from 'ofetch';
import type { Store } from 'pinia';

interface StoreWithError extends Store {
  error?: IFetchError;
}

export const handleStoreError = (store: StoreWithError, error: IFetchError) => {
  store.error = {
    name: error.name,
    message: error.message,
    statusCode: error.statusCode,
    statusMessage: error.statusMessage,
  };

  if (import.meta.client) {
    store.error.stack = error.stack;
  }

  console.log(error);
};
