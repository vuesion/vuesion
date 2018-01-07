/**
 * inspired by https://github.com/robinvdvleuten/vuex-persistedstate
 */

import merge from 'deepmerge';
import { Plugin, Store } from 'vuex';

export interface IVuexPersistStorage extends Storage {
  whitelist?: string[];
  prefix?: string;
}

export const VuexPersist = (storages: IVuexPersistStorage[]): Plugin<any> => {
  const canWriteStorage = (store: IVuexPersistStorage) => {
    try {
      store.setItem('@@', '1');
      store.removeItem('@@');
      return true;
    } catch (e) {
      return false;
    }
  };
  const getState = (key: string, store: IVuexPersistStorage) => {
    try {
      const value = store.getItem(key);
      return value && value !== 'undefined' ? JSON.parse(value) : undefined;
    } catch (e) {
      return undefined;
    }
  };
  const setState = (key: string, state: string, store: IVuexPersistStorage) => {
    return store.setItem(key, JSON.stringify(state));
  };
  const subscriber = (store: Store<any>) => {
    return (handler: any) => {
      return store.subscribe(handler);
    };
  };

  return (vuexStore: Store<any>) => {
    const hydratedState: any = {};

    storages.forEach((storage: IVuexPersistStorage): void => {
      if (canWriteStorage(storage)) {

        storage.whitelist.forEach((key: string) => {
          const savedState: any = getState(key, storage);

          if (savedState && Object.keys(savedState).length > 0) {
            hydratedState[key] = savedState;
          }

          subscriber(vuexStore)((mutation: any, state: any) => {
            setState(key, state[key], storage);
          });
        });
      }
    });

    /**
     * merge saved state from store into initial store
     */
    const mergedState: any = merge(vuexStore.state, hydratedState, {
      clone: false,
      arrayMerge: (store, saved) => {
        return saved;
      },
    });

    vuexStore.replaceState(mergedState);
  };
};
