import { homeDefaultState, homeMutations } from './home/mutations';
import { counterDefaultState, counterMutations } from './counter/mutations';

export const defaultState = {
  ...homeDefaultState,
  ...counterDefaultState,
};

export const mutations = {
  ...homeMutations,
  ...counterMutations,
};
