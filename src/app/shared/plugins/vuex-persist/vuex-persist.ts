/**
 * inspired by https://github.com/robinvdvleuten/vuex-persistedstate
 */

import merge from 'deepmerge';
import { Plugin, Store } from 'vuex';
import { IState } from '../../../state';

export interface IVuexPersistStorage extends Storage {
  modules: string[];
  beforePersist: (state: IState) => IState;
  forceInitialState: boolean;
}

const canWriteStorage = (storage: IVuexPersistStorage) => {
  try {
    storage.setItem('@@', '1');
    storage.removeItem('@@');
    return true;
  } catch (e) {
    return false;
  }
};
const getState = (key: string, storage: IVuexPersistStorage) => {
  try {
    const value = storage.getItem(key);
    return value && value !== 'undefined' ? JSON.parse(value) : undefined;
  } catch (e) {
    return undefined;
  }
};
const setState = (key: string, state: IState, storage: IVuexPersistStorage) => {
  return storage.setItem(key, JSON.stringify(state));
};
const subscriber = (store: Store<IState>) => {
  return (handler: any) => {
    return store.subscribe(handler);
  };
};
const processStorage = (storage: IVuexPersistStorage, vuexStore: Store<IState>): void => {
  const mergeOptions = {
    clone: false,
    arrayMerge: (target: any, source: any) => {
      return source;
    },
  };
  storage.modules.forEach((key: string) => {
    const savedState: IState = getState(key, storage);

    if (savedState && Object.keys(savedState).length > 0) {
      vuexStore.state[key] = storage.forceInitialState
        ? merge(savedState, vuexStore.state[key], mergeOptions)
        : merge(vuexStore.state[key], savedState, mergeOptions);
    }

    subscriber(vuexStore)((mutation: any, state: IState) => {
      state = storage.beforePersist(JSON.parse(JSON.stringify(state)));

      setState(key, state[key], storage);
    });
  });
};

export const VuexPersist = (storages: IVuexPersistStorage[]): Plugin<IState> => {
  return (vuexStore: Store<IState>) => {
    storages.forEach(
      (storage: IVuexPersistStorage): void => {
        if (canWriteStorage(storage)) {
          processStorage(storage, vuexStore);
        }
      },
    );

    vuexStore.replaceState(vuexStore.state);
  };
};
