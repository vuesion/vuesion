import { homeDefaultState, homeMutations } from './home/mutations';
import { counterDefaultState, counterMutations } from './counter/mutations';

export const defaultState = {
  app: {
    lang: null,
  },
  ...homeDefaultState,
  ...counterDefaultState,
};

export const mutations = {
  CHANGE_LANG: (state: any, lang: string) => {
    state.app.lang = lang;
  },
  ...homeMutations,
  ...counterMutations,
};
