import { IVuexPersistStorage } from './vuex-persist';

export class PersistLocalStorage implements IVuexPersistStorage {
  [key: string]: any;
  [index: number]: string;
  public modules: string[];
  public prefix: string;
  public length: number;
  public forceInitialState: boolean;
  private readonly localBeforePersist: (state: any) => any;

  constructor(modules: string[] = [], beforePersist?: (state: any) => any, prefix: string = 'vuexpersist') {
    this.modules = modules;
    this.prefix = prefix;
    this.localBeforePersist = beforePersist;
    this.forceInitialState = false;
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

  public beforePersist(state: any): any {
    if (this.localBeforePersist) {
      return this.localBeforePersist(state);
    }

    return state;
  }

  private getKey(key: string) {
    return `${this.prefix}${key}`;
  }
}
