import { CounterGetters } from './getters';
import { IState } from '../mutations';

describe('CounterGetters', () => {

  test('it should get the count', () => {
    const testState = {
      counter: {
        count: 1337,
      },
    } as IState;

    expect(CounterGetters.getCount(testState)).toBe(1337);
  });

});
