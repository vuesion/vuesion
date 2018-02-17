import { VuexPersist }         from './vuex-persist';
import { Plugin }              from 'vuex';
import { PersistLocalStorage } from './PersistLocalStorage';

describe('vuex-persist', () => {

  test('should merge state', () => {
    (window as any).localStorage = {
      clear:      jest.fn(),
      getItem:    (key: string): string => {
        if (key === 'vuexpersistbar') {
          return undefined;
        }

        return '{"bar":"baz"}';
      },
      key:        jest.fn(),
      removeItem: jest.fn(),
      setItem:    jest.fn(),
    };

    const plugin: Plugin<any> = VuexPersist(
      [
        new PersistLocalStorage(['foo', 'bar']),
      ],
    );
    let mergedState: any = null;
    let updateHandler: any = null;
    const mockStore: any = {
      state:        {
        initial: ['TEST'],
      },
      subscribe:    (handler: any) => {
        updateHandler = handler;
      },
      replaceState: (newState: any) => {
        mergedState = newState;
      },
    };

    plugin(mockStore);

    updateHandler({ update: true }, { bar: { test: 1 } });

    expect(mergedState).toEqual(
      {
        foo:     {
          bar: 'baz',
        },
        initial: ['TEST'],
      },
    );

    expect((window as any).localStorage.setItem.mock.calls[1])
    .toEqual(
      [
        'vuexpersistbar',
        '{"test":1}',
      ],
    );
  });

  test('should continue if store is not writable', () => {
    (window as any).localStorage = {
      clear:      jest.fn(),
      getItem:    (): string => {
        throw new Error();
      },
      key:        jest.fn(),
      removeItem: jest.fn(),
      setItem:    () => {
        throw new Error();
      },
    };

    const plugin: Plugin<any> = VuexPersist(
      [
        new PersistLocalStorage(['initial']),
      ],
    );
    let mergedState: any = null;
    let updateHandler: any = null;
    const mockStore: any = {
      state:        {
        initial: ['TEST'],
      },
      subscribe:    (handler: any) => {
        updateHandler = handler;
      },
      replaceState: (newState: any) => {
        mergedState = newState;
      },
    };

    plugin(mockStore);

    expect(mergedState).toEqual(
      {
        initial: ['TEST'],
      },
    );
  });

  test('should continue if store is not readable', () => {
    (window as any).localStorage = {
      clear:      jest.fn(),
      getItem:    (): string => {
        throw new Error();
      },
      key:        jest.fn(),
      removeItem: jest.fn(),
      setItem:    jest.fn(),
    };

    const plugin: Plugin<any> = VuexPersist(
      [
        new PersistLocalStorage(['initial']),
      ],
    );
    let mergedState: any = null;
    let updateHandler: any = null;
    const mockStore: any = {
      state:        {
        initial: ['TEST'],
      },
      subscribe:    (handler: any) => {
        updateHandler = handler;
      },
      replaceState: (newState: any) => {
        mergedState = newState;
      },
    };

    plugin(mockStore);

    expect(mergedState).toEqual(
      {
        initial: ['TEST'],
      },
    );
  });

  test('should merge arrays correctly', () => {
    (window as any).localStorage = {
      clear:      jest.fn(),
      getItem:    (): string => {
        return '["TEST"]';
      },
      key:        jest.fn(),
      removeItem: jest.fn(),
      setItem:    jest.fn(),
    };

    const plugin: Plugin<any> = VuexPersist(
      [
        new PersistLocalStorage(['initial']),
      ],
    );
    let mergedState: any = null;
    let updateHandler: any = null;
    const mockStore: any = {
      state:        {
        initial: ['TEST'],
      },
      subscribe:    (handler: any) => {
        updateHandler = handler;
      },
      replaceState: (newState: any) => {
        mergedState = newState;
      },
    };

    plugin(mockStore);

    updateHandler({ update: true }, { initial: ['foo', 'bar'] });

    expect(mergedState).toEqual({
                                  initial: ['TEST'],
                                });

    expect((window as any).localStorage.setItem.mock.calls[1])
    .toEqual(
      [
        'vuexpersistinitial',
        '["foo","bar"]',
      ],
    );
  });
});
