import { IVuexPersistStorage } from './vuex-persist';
import * as Cookies from 'js-cookie';
import merge from 'deepmerge';
import { IServerContext } from '../../../../server/isomorphic';
import { CookieAttributes } from 'js-cookie';

export class PersistCookieStorage implements IVuexPersistStorage {
  public whitelist: string[];
  public prefix: string;
  public length: number;
  public options: any;
  [key: string]: any;
  [index: number]: string;
  private indexKey: string = 'vuexpersistcookie';

  constructor(whitelist: string[] = [], options: CookieAttributes = {}, prefix: string = 'vuexpersist') {
    this.whitelist = whitelist;
    this.prefix = prefix;
    this.options = options;
  }

  public clear(): void {
    const index: any = this.getIndex();

    Object.keys(index).forEach((key: string) => {
      this.removeItem(index[key]);
    });

    Cookies.remove(this.indexKey);
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
    Cookies.set(this.getKey(key), data, this.options);
  }

  public getMergedStateFromServerContext(serverContext: IServerContext, state: any): any {
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
      clone: false,
      arrayMerge: (initial, cookie) => {
        return cookie;
      },
    });
  }

  private getKey(key: string) {
    return `${this.prefix}${key}`;
  }

  private getIndex(): any {
    return JSON.parse(Cookies.get(this.indexKey) || '{}');
  }

  private addToIndex(key: string) {
    const index: any = this.getIndex();

    index[this.getKey(key)] = key;

    Cookies.set(this.indexKey, JSON.stringify(index), this.options);
  }

  private removeFromIndex(key: string) {
    const index: any = this.getIndex();

    delete index[this.getKey(key)];

    Cookies.set(this.indexKey, JSON.stringify(index), this.options);
  }

}
