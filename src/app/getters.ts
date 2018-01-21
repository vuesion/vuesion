import * as topicGetters from './home/getters';
import * as counterGetters from './counter/getters';

export const getters = {
  getLang: (state: any) => state.app.lang,
  ...topicGetters,
  ...counterGetters,
};
