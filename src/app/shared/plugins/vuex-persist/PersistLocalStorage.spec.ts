import { PersistLocalStorage } from './PersistLocalStorage';

describe('PersistLocalStorage', () => {
  let storage: PersistLocalStorage;

  beforeEach(() => {
    (window as any).localStorage = {
      clear: jest.fn(),
      getItem: jest.fn(),
      key: jest.fn(),
      removeItem: jest.fn(),
      setItem: jest.fn(),
    };

    storage = new PersistLocalStorage();
  });

  test('should clear store', () => {
    const spy = jest.spyOn(Storage.prototype, 'clear');
    storage.clear();

    expect(spy).toHaveBeenCalled();
  });

  test('should get item', () => {
    const spy = jest.spyOn(Storage.prototype, 'getItem');
    storage.getItem('foo');

    expect(spy).toHaveBeenCalledWith('vuexpersistfoo');
  });

  test('should get key', () => {
    const spy = jest.spyOn(Storage.prototype, 'key');
    storage.key(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  test('should remove item', () => {
    const spy = jest.spyOn(Storage.prototype, 'removeItem');
    storage.removeItem('foo');

    expect(spy).toHaveBeenCalledWith('vuexpersistfoo');
  });

  test('should set item and change prefix', () => {
    const localStore: PersistLocalStorage = new PersistLocalStorage([], undefined, 'testprefix');
    const spy = jest.spyOn(Storage.prototype, 'setItem');

    localStore.setItem('foo', 'bar');

    expect(spy).toHaveBeenCalledWith('testprefixfoo', 'bar');
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
