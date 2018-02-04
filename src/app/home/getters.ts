import { IState } from '../mutations';

export interface IHomeGetters {
  getHome(state: IState): any[];
}

export const HomeGetters: IHomeGetters = {
  getHome(state: IState): any[] {
    return state.home;
  },
};
