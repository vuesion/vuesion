import { ActionContext } from 'vuex';
import { IState }        from '../mutations';
import { HttpService }   from '../shared/services/HttpService';

export interface IVuexExampleActions {
  getTopics(context: ActionContext<IState, IState>): Promise<any>;
}

export const VuexExampleActions: IVuexExampleActions = {
  getTopics({ commit, state }: ActionContext<IState, IState>): Promise<any> {
    if (state.vuexExample.topics.length > 0) {
      commit('TOPICS', state.vuexExample.topics);
      return Promise.resolve();
    }

    return HttpService.get('/posts')
                      .then((response: any) => {
                        commit('TOPICS', response.data);
                      })
                      .catch((e: Error) => {
                        commit('TOPICS_FAILURE', e);
                      });
  },
};
