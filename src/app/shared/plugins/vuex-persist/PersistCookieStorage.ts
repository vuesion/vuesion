import { IVuexPersistStorage } from './vuex-persist';
import * as Cookies            from 'js-cookie';
import { CookieAttributes }    from 'js-cookie';
import merge                   from 'deepmerge';
import { IServerContext }      from '../../../../server/isomorphic';
import { IState }              from '../../../state';

interface IPersistCookieStorageConfig {
  cookieOptions: CookieAttributes;
  beforePersist?: (state: IState) => IState;
}

export class PersistCookieStorage implements IVuexPersistStorage {
  public static getMergedStateFromServerContext<T>(serverContext: IServerContext, state: any): T {
    const vuexPersistCookie: any = JSON.parse(serverContext.cookies[this.indexKey] || '{}');
    const cookieState: any = {};

    Object.keys(serverContext.cookies).forEach((key: string) => {
      const mappedKey: string = vuexPersistCookie[key];

      if (mappedKey) {
        try {
          cookieState[mappedKey] = JSON.parse(serverContext.cookies[key]);
        } catch (e) {
          cookieState[mappedKey] = state[mappedKey] || {};
        }
      }
    });

    return merge(state, cookieState, {
      clone:      false,
      arrayMerge: (initial, cookie) => {
        return cookie;
      },
    });
  }

  private static indexKey: string = 'vuexpersistcookie';

  public modules: string[];
  public prefix: string;
  public length: number;
  public options: IPersistCookieStorageConfig;

  [key: string]: any;

  [index: number]: string;

  constructor(modules: string[] = [], options: IPersistCookieStorageConfig = { cookieOptions: {} }, prefix: string = 'vuexpersist') {
    this.modules = modules;
    this.prefix = prefix;
    this.options = options;
  }

  public clear(): void {
    const index: any = this.getIndex();

    Object.keys(index).forEach((key: string) => {
      this.removeItem(index[key]);
    });

    Cookies.remove(PersistCookieStorage.indexKey);
  }

  public getItem(key: string): string | null {
    return Cookies.get(this.getKey(key));
  }

  public key(index: number): string | null {
    return undefined;
  }

  public removeItem(key: string): void {
    this.removeFromIndex(key);
    Cookies.remove(this.getKey(key));
  }

  public setItem(key: string, data: string): void {
    this.addToIndex(key);
    Cookies.set(this.getKey(key), data, this.options.cookieOptions);
  }

  public beforePersist(state: IState): IState {
    if (this.options.beforePersist) {
      return this.options.beforePersist(state);
    }

    return state;
  }

  private getKey(key: string) {
    return `${this.prefix}${key}`;
  }

  private getIndex(): any {
    return JSON.parse(Cookies.get(PersistCookieStorage.indexKey) || '{}');
  }

  private addToIndex(key: string) {
    const index: any = this.getIndex();

    index[this.getKey(key)] = key;

    Cookies.set(PersistCookieStorage.indexKey, JSON.stringify(index), this.options.cookieOptions);
  }

  private removeFromIndex(key: string) {
    const index: any = this.getIndex();

    delete index[this.getKey(key)];

    Cookies.set(PersistCookieStorage.indexKey, JSON.stringify(index), this.options.cookieOptions);
  }

}
