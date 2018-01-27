import * as topicActions from './home/actions';
import * as counterActions from './counter/actions';

export const actions: any = {
  changeLang: ({ commit }: any, lang: string) => commit('CHANGE_LANG', lang),
  ...topicActions,
  ...counterActions,
};
