import { describe, test, expect } from 'vitest';
import { getFloatInRange, getIntInRange } from './random-numbers';

describe('random-numbers', () => {
  test('getFloatInRange', () => {
    expect(getFloatInRange(5, 7)).toBeGreaterThanOrEqual(5);
    expect(getFloatInRange(5, 7)).toBeLessThanOrEqual(8);
  });

  test('getIntInRange', () => {
    expect(getIntInRange(5, 7)).toBeGreaterThanOrEqual(5);
    expect(getIntInRange(5, 7)).toBeLessThanOrEqual(7);
  });
});
