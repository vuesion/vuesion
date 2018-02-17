import { VuexExampleMutations } from './mutations';
import { IState }               from '../mutations';

describe('VuexExampleMutations', () => {
  const testState = {
    vuexExample: {
      topics: [],
      error:  null,
    },
  } as IState;

  test('it should set topics', () => {
    VuexExampleMutations.TOPICS(testState, [1, 2, 3]);
    expect(testState.vuexExample.topics).toEqual([1, 2, 3]);
    expect(testState.vuexExample.error).toBeNull();
  });

  test('it should set error', () => {
    VuexExampleMutations.TOPICS_FAILURE(testState, new Error('foo'));
    expect(testState.vuexExample.error).toEqual(new Error('foo'));
  });

});
