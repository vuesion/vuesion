import { CounterMutations } from './mutations';
import { IState }           from '../mutations';

describe('CounterMutations', () => {

  test('it should increment the counts', () => {
    const testState = {
      counter: {
        count: 1337,
      },
    } as IState;

    CounterMutations.INCREMENT(testState);
    expect(testState.counter.count).toBe(1338);
  });

  test('it should decrement the counts', () => {
    const testState = {
      counter: {
        count: 1337,
      },
    } as IState;

    CounterMutations.DECREMENT(testState);
    expect(testState.counter.count).toBe(1336);
  });

});
