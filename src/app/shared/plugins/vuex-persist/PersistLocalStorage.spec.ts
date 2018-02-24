import { PersistLocalStorage } from './PersistLocalStorage';

describe('PersistLocalStorage', () => {
  let storage: PersistLocalStorage;

  beforeEach(() => {
    (window as any).localStorage = {
      clear:      jest.fn(),
      getItem:    jest.fn(),
      key:        jest.fn(),
      removeItem: jest.fn(),
      setItem:    jest.fn(),
    };

    storage = new PersistLocalStorage();
  });

  test('should clear store', () => {
    storage.clear();

    expect(window.localStorage.clear).toHaveBeenCalled();
  });

  test('should get item', () => {
    storage.getItem('foo');

    expect(window.localStorage.getItem).toHaveBeenCalledWith('vuexpersistfoo');
  });

  test('should get key', () => {
    storage.key(1);

    expect(window.localStorage.key).toHaveBeenCalledWith(1);
  });

  test('should remove item', () => {
    storage.removeItem('foo');

    expect(window.localStorage.removeItem).toHaveBeenCalledWith('vuexpersistfoo');
  });

  test('should set item and change prefix', () => {
    const localStore: PersistLocalStorage = new PersistLocalStorage([], undefined, 'testprefix');

    localStore.setItem('foo', 'bar');

    expect(window.localStorage.setItem).toHaveBeenCalledWith('testprefixfoo', 'bar');
  });

  test('should manipulate state before persist', () => {
    const state: any = {
      foo: 'bar',
      baz: 'faz',
    };
    const beforePersist = (localState: any): any => {
      delete localState.foo;
      return localState;
    };
    let localStore: PersistLocalStorage = new PersistLocalStorage([]);

    expect(localStore.beforePersist(state)).toEqual(state);

    localStore = new PersistLocalStorage([], beforePersist);
    expect(localStore.beforePersist(state)).toEqual({ baz: 'faz' });
  });

});
