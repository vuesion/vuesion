import { IVuexPersistStorage } from './vuex-persist';

export class PersistLocalStorage implements IVuexPersistStorage {
  public whitelist: string[];
  public prefix: string;
  public length: number;
  [key: string]: any;
  [index: number]: string;

  constructor(whitelist: string[] = [], prefix: string = 'vuexpersist') {
    this.whitelist = whitelist;
    this.prefix = prefix;
  }

  public clear(): void {
    window.localStorage.clear();
  }

  public getItem(key: string): string | null {
    return window.localStorage.getItem(this.getKey(key));
  }

  public key(index: number): string | null {
    return window.localStorage.key(index);
  }

  public removeItem(key: string): void {
    window.localStorage.removeItem(this.getKey(key));
  }

  public setItem(key: string, data: string): void {
    window.localStorage.setItem(this.getKey(key), data);
  }

  private getKey(key: string) {
    return `${this.prefix}${key}`;
  }
}
