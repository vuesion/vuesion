import { VuexExampleGetters } from './getters';
import { IState } from '../mutations';

describe('VuexExampleGetters', () => {

  test('it should get topics', () => {
    const testState = {
      vuexExample: {
        topics: [1, 2, 3],
      },
    } as IState;

    expect(VuexExampleGetters.getTopics(testState)).toEqual([1, 2, 3]);
  });

});
