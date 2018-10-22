import { Plugin }                           from 'vuex';
import { IVuexPersistStorage, VuexPersist } from './vuex-persist';
import { IState }                           from '../../../state';

class PersistMockStorage implements IVuexPersistStorage {
  public modules: string[];
  public prefix: string;
  public length: number;
  private readonly localBeforePersist: (state: IState) => IState;

  [key: string]: any;

  [index: number]: string;

  constructor(modules: string[] = [], beforePersist?: (state: IState) => IState, prefix: string = 'vuexpersist') {
    this.modules = modules;
    this.prefix = prefix;
    this.localBeforePersist = beforePersist;
  }

  public clear(): void {
    (window as any).mockStorage.clear();
  }

  public getItem(key: string): string | null {
    return (window as any).mockStorage.getItem(this.getKey(key));
  }

  public key(index: number): string | null {
    return (window as any).mockStorage.key(index);
  }

  public removeItem(key: string): void {
    (window as any).mockStorage.removeItem(this.getKey(key));
  }

  public setItem(key: string, data: string): void {
    (window as any).mockStorage.setItem(this.getKey(key), data);
  }

  public beforePersist(state: IState): IState {
    if (this.localBeforePersist) {
      return this.localBeforePersist(state);
    }

    return state;
  }

  private getKey(key: string) {
    return `${this.prefix}${key}`;
  }
}

describe('vuex-persist', () => {

  test('should merge state', () => {
    (global as any).mockStorage = {
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
        new PersistMockStorage(['foo', 'bar']),
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

    expect((window as any).mockStorage.setItem.mock.calls[1])
    .toEqual(
      [
        'vuexpersistbar',
        '{"test":1}',
      ],
    );
  });

  test('should continue if store is not writable', () => {
    (window as any).mockStorage = {
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
        new PersistMockStorage(['initial']),
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
    (window as any).mockStorage = {
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
        new PersistMockStorage(['initial']),
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
    (window as any).mockStorage = {
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
        new PersistMockStorage(['initial']),
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

    expect((window as any).mockStorage.setItem.mock.calls[1])
    .toEqual(
      [
        'vuexpersistinitial',
        '["foo","bar"]',
      ],
    );
  });
});
