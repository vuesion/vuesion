import { PersistCookieStorage } from './PersistCookieStorage';

describe('PersistCookieStorage', () => {
  let storage: PersistCookieStorage;

  beforeEach(() => {
    storage = new PersistCookieStorage();
  });

  test('should set item', () => {
    storage.setItem('foo', 'bar');

    expect(document.cookie).toBe('vuexpersistcookie={%22vuexpersistfoo%22:%22foo%22}; vuexpersistfoo=bar');
  });

  test('should get item', () => {
    expect(storage.getItem('foo')).toBe('bar');
  });

  test('should delete item', () => {
    storage.removeItem('foo');
    expect(document.cookie).toBe('vuexpersistcookie={}');
  });

  test('should clear store', () => {
    storage.setItem('foo', 'bar');
    storage.setItem('foo2', 'bar2');
    storage.clear();

    expect(document.cookie).toBe('');
  });

  test('key should return undefined', () => {
    expect(storage.key(1)).toBe(undefined);
  });

  test('should merge server context if index cookie is not present', () => {
    const mergedState: any = PersistCookieStorage.getMergedStateFromServerContext({}, { foo: ['bar'] });

    expect(mergedState).toEqual({ foo: ['bar'] });
  });

  test('should merge server context', () => {
    const mergedState: any = PersistCookieStorage.getMergedStateFromServerContext(
      {
        vuexpersistcookie: '{"vuexpersistfoo":"foo"}',
        vuexpersistfoo: '["baz"]',
      },
      {
        foo: ['bar'],
      },
    );

    expect(mergedState).toEqual({ foo: ['baz'] });
  });

  test('should continue with invalid JSON and use initial state', () => {
    const mergedState: any = PersistCookieStorage.getMergedStateFromServerContext(
      {
        vuexpersistcookie: '{"vuexpersistfoo":"foo"}',
        vuexpersistfoo: '["baz]',
      },
      {
        foo: ['bar'],
      },
    );

    expect(mergedState).toEqual({ foo: ['bar'] });
  });

  test('should continue with invalid JSON and fall back if ther is no initial state', () => {
    const mergedState: any = PersistCookieStorage.getMergedStateFromServerContext(
      {
        vuexpersistcookie: '{"vuexpersistfoo":"foo"}',
        vuexpersistfoo: '["baz]',
      },
      {
        fooo: ['bar'],
      },
    );

    expect(mergedState).toEqual({ fooo: ['bar'], foo: {} });
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
    let localStorage: PersistCookieStorage = new PersistCookieStorage([]);

    expect(localStorage.beforePersist(state)).toEqual(state);

    localStorage = new PersistCookieStorage([], { cookieOptions: {}, beforePersist }, 'foo');
    expect(localStorage.beforePersist(state)).toEqual({ baz: 'faz' });
  });

  test('should get cookies from current server state', () => {
    let result = PersistCookieStorage.getCookiesFromState(
      {
        vuexpersistcookie: '{"vuexpersistapp":"app"}',
        vuexpersistapp: '{"override":"value", "nonExistingKey":"value"}',
        webstorm: '297fg92ug49gf29fg',
      },
      {
        app: {
          override: 'new value',
          exclude: 'this should not be in the cookie',
        },
      },
    );
    let expected = [{ name: 'vuexpersistapp', value: '{"override":"new value"}' }];

    expect(result).toEqual(expected);

    result = PersistCookieStorage.getCookiesFromState(
      {
        vuexpersistapp: '{"override":"value", "nonExistingKey":"value"}',
      },
      {
        app: {
          override: 'new value',
          exclude: 'this should not be in the cookie',
        },
      },
    );
    expected = [];

    expect(result).toEqual(expected);
  });
});
