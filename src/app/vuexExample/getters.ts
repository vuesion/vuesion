import { IState } from '../mutations';

export interface IVuexExampleGetters {
  getTopics(state: IState): any[];
}

export const VuexExampleGetters: IVuexExampleGetters = {
  getTopics(state: IState): any[] {
    return state.vuexExample.topics;
  },
};
