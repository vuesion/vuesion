import { PersistCookieStorage } from './PersistCookieStorage';
import { IServerContext }       from '../../../../server/isomorphic';

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
    const mergedState: any = PersistCookieStorage.getMergedStateFromServerContext(
      { cookies: {} } as IServerContext,
      {
        foo: ['bar'],
      },
    );

    expect(mergedState).toEqual({ foo: ['bar'] });
  });

  test('should merge server context', () => {
    const mergedState: any = PersistCookieStorage.getMergedStateFromServerContext(
      {
        cookies: {
          vuexpersistcookie: '{"vuexpersistfoo":"foo"}',
          vuexpersistfoo:    '["baz"]',
        },
      } as IServerContext,
      {
        foo: ['bar'],
      },
    );

    expect(mergedState).toEqual({ foo: ['baz'] });
  });

  test('should continue with invalid JSON and use initial state', () => {
    const mergedState: any = PersistCookieStorage.getMergedStateFromServerContext(
      {
        cookies: {
          vuexpersistcookie: '{"vuexpersistfoo":"foo"}',
          vuexpersistfoo:    '["baz]',
        },
      } as IServerContext,
      {
        foo: ['bar'],
      },
    );

    expect(mergedState).toEqual({ foo: ['bar'] });
  });

  test('should continue with invalid JSON and fall back if ther is no initial state', () => {
    const mergedState: any = PersistCookieStorage.getMergedStateFromServerContext(
      {
        cookies: {
          vuexpersistcookie: '{"vuexpersistfoo":"foo"}',
          vuexpersistfoo:    '["baz]',
        },
      } as IServerContext,
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
});
