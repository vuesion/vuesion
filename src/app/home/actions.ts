import axios from 'axios';
import { ActionContext } from 'vuex';
import { IState } from '../mutations';

export interface IHomeActions {
  getHome(context: ActionContext<IState, IState>): void;
}

export const HomeActions: IHomeActions = {
  getHome({ commit, state }: ActionContext<IState, IState>) {
    if (state.home.length > 0) {
      return commit('HOME', state.home);
    }

    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response: any) => {
        commit('HOME', response.data);
      });
  },
};
