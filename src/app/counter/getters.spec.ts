import { CounterGetters }      from './getters';
import { CounterDefaultState } from './state';

describe('CounterGetters', () => {

  test('it should get the count', () => {
    expect(CounterGetters.count(CounterDefaultState)).toBe(0);
  });

  test('it should get increment pending', () => {
    expect(CounterGetters.incrementPending(CounterDefaultState)).toBe(false);
  });

  test('it should get decrement pending', () => {
    expect(CounterGetters.decrementPending(CounterDefaultState)).toBe(false);
  });

});
