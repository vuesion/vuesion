import { describe, test, expect } from 'vitest';
import { isNilLike } from './is-nil-like';

describe('isNilLike', () => {
  test('should return true if null or undefined', () => {
    expect(isNilLike(null)).toBeTruthy();
    expect(isNilLike(undefined)).toBeTruthy();
  });

  test('should return true if "null" or "undefined"', () => {
    expect(isNilLike('null')).toBeTruthy();
    expect(isNilLike('undefined')).toBeTruthy();
  });
});
