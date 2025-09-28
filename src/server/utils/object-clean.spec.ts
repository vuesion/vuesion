import { describe, it, expect } from 'vitest';
import { cleanUndefined } from './object-clean';

describe('cleanUndefined', () => {
  it('removes keys with undefined values', () => {
    const res = cleanUndefined({ a: 1, b: undefined, c: 'x' });
    expect(res).toEqual({ a: 1, c: 'x' });
  });

  it('keeps null values', () => {
    const res = cleanUndefined({ a: null, b: undefined });
    expect(res).toEqual({ a: null });
  });

  it('returns empty object when all values are undefined', () => {
    const res = cleanUndefined({ a: undefined, b: undefined });
    expect(res).toEqual({});
  });

  it('returns same values for objects without undefined', () => {
    const input = { a: 1, b: 'y' };
    const res = cleanUndefined(input);
    expect(res).toEqual(input);
  });

  it('works with mixed value types (number, string, boolean, object)', () => {
    const input = {
      n: 42,
      s: 'test',
      b: false,
      o: { k: 'v' },
      u: undefined,
    };
    const res = cleanUndefined(input);
    expect(res).toEqual({
      n: 42,
      s: 'test',
      b: false,
      o: { k: 'v' },
    });
  });
});
