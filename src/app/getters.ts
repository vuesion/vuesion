import * as topicGetters from './home/getters';
import * as counterGetters from './counter/getters';

export const getters: any = {
  getLang: (state: any) => state.app.lang,
  ...topicGetters,
  ...counterGetters,
};
