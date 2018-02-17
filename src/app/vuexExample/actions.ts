import axios             from 'axios';
import { ActionContext } from 'vuex';
import { IState }        from '../mutations';

export interface IVuexExampleActions {
  getTopics(context: ActionContext<IState, IState>): Promise<any>;
}

export const VuexExampleActions: IVuexExampleActions = {
  getTopics({ commit, state }: ActionContext<IState, IState>): Promise<any> {
    if (state.vuexExample.topics.length > 0) {
      commit('TOPICS', state.vuexExample.topics);
      return Promise.resolve();
    }

    return axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response: any) => {
                  commit('TOPICS', response.data);
                })
                .catch((e: Error) => {
                  commit('TOPICS_FAILURE', e);
                });
  },
};
