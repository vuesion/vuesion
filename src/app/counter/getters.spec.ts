import { CounterGetters } from './getters';
import { CounterDefaultState, ICounterState } from './state';

describe('CounterGetters', () => {
  let testState: ICounterState;

  beforeEach(() => {
    testState = CounterDefaultState();
  });

  test('it should get the count', () => {
    expect(CounterGetters.count(testState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(CounterGetters.incrementPending(testState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(CounterGetters.decrementPending(testState)).toBe(false);
  });
});
