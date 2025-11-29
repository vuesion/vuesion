import { describe, expect, test } from 'vitest';
import { mapPropToBreakpoints } from './map-prop-to-breakpoints';
import { BreakPoint } from '#shared/enums/BreakPoint';

describe('mapPropToBreakpoints', () => {
  test('fills missing breakpoints using interpolation=true (array mode)', () => {
    const result = mapPropToBreakpoints(['8', '16'], true);

    expect(result).toEqual({
      [BreakPoint.phone]: '8',
      [BreakPoint.tabletPortrait]: '16',
      [BreakPoint.tabletLandscape]: '16', // interpolated
      [BreakPoint.smallDesktop]: '16', // interpolated
      [BreakPoint.largeDesktop]: '16', // interpolated
    });
  });

  test('scalar interpolation=true fills all breakpoints with same value', () => {
    const result = mapPropToBreakpoints('24', true);

    expect(result).toEqual({
      [BreakPoint.phone]: '24',
      [BreakPoint.tabletPortrait]: '24',
      [BreakPoint.tabletLandscape]: '24',
      [BreakPoint.smallDesktop]: '24',
      [BreakPoint.largeDesktop]: '24',
    });
  });

  test('array interpolation=false does NOT fill missing breakpoints', () => {
    const result = mapPropToBreakpoints(['8', '16'], false);

    expect(result).toEqual({
      [BreakPoint.phone]: '8',
      [BreakPoint.tabletPortrait]: '16',
      [BreakPoint.tabletLandscape]: null,
      [BreakPoint.smallDesktop]: null,
      [BreakPoint.largeDesktop]: null,
    });
  });

  test('filter function is applied to each breakpoint', () => {
    const result = mapPropToBreakpoints<'8' | 'X' | null>(['8', null], false, (v) => (v === null ? 'X' : v));

    expect(result).toEqual({
      [BreakPoint.phone]: '8',
      [BreakPoint.tabletPortrait]: 'X',
      [BreakPoint.tabletLandscape]: 'X',
      [BreakPoint.smallDesktop]: 'X',
      [BreakPoint.largeDesktop]: 'X',
    });
  });

  test('interpolation=true with empty array results in null for all breakpoints', () => {
    const result = mapPropToBreakpoints([], true);

    expect(result).toEqual({
      phone: null,
      tabletPortrait: null,
      tabletLandscape: null,
      smallDesktop: null,
      largeDesktop: null,
    });
  });

  describe('mapPropToBreakpoints (memo behavior)', () => {
    test('returns identical instance for identical primitive input', () => {
      const a = mapPropToBreakpoints('8');
      const b = mapPropToBreakpoints('8');

      expect(a).toBe(b); // SAME reference
    });

    test('returns identical instance for identical array reference', () => {
      const arr = ['8', '16', '24'];

      const a = mapPropToBreakpoints(arr);
      const b = mapPropToBreakpoints(arr);

      expect(a).toBe(b);
    });

    test('does not share caches for different array references with same contents', () => {
      const a1 = ['8', '16'];
      const a2 = ['8', '16'];

      const r1 = mapPropToBreakpoints(a1);
      const r2 = mapPropToBreakpoints(a2);

      expect(r1).not.toBe(r2);
      expect(r1).toEqual(r2);
    });

    test('creates distinct cache entries for interpolate=false vs true', () => {
      const arr = ['8'];

      const r1 = mapPropToBreakpoints(arr, false);
      const r2 = mapPropToBreakpoints(arr, true);

      expect(r1).not.toBe(r2);
      expect(r1).not.toEqual(r2); // interpolate=true fills all breakpoints
    });

    test('treats null input as primitive and caches correctly', () => {
      const a = mapPropToBreakpoints(null);
      const b = mapPropToBreakpoints(null);

      expect(a).toBe(b);
    });

    test('treats undefined input as primitive and caches correctly', () => {
      const a = mapPropToBreakpoints(undefined);
      const b = mapPropToBreakpoints(undefined);

      expect(a).toBe(b);
    });

    test('applies filter function before caching', () => {
      const filter = (v: string | null) => (v === 'x' ? 'y' : v);

      const r1 = mapPropToBreakpoints(['x'], false, filter);
      const r2 = mapPropToBreakpoints(['x'], false, filter);

      expect(r1).toStrictEqual(r2);
      expect(r1[BreakPoint.phone]).toBe('y');
    });

    test('does not share cache entries if filter function changes', () => {
      const f1 = (v: string | null) => v;
      const f2 = (v: string | null) => (v ? v + '_x' : null);

      const r1 = mapPropToBreakpoints(['8'], false, f1);
      const r2 = mapPropToBreakpoints(['8'], false, f2);

      expect(r1).not.toBe(r2);
      expect(r2[BreakPoint.phone]).toBe('8_x');
    });

    test('correctly handles array input of various lengths', () => {
      const result = mapPropToBreakpoints(['1', '2']);

      expect(result[BreakPoint.phone]).toBe('1');
      expect(result[BreakPoint.tabletPortrait]).toBe('2');
      expect(result[BreakPoint.tabletLandscape]).toBeNull();
    });

    test('caches based on array identity, not deep contents', () => {
      const arr = ['1', '2'];
      const arrChanged = ['1', '2', '3']; // new identity

      const r1 = mapPropToBreakpoints(arr);
      const r2 = mapPropToBreakpoints(arrChanged);

      expect(r1).not.toBe(r2);
    });

    test('creates different cache entries for different scalar inputs', () => {
      const r1 = mapPropToBreakpoints('8');
      const r2 = mapPropToBreakpoints('16');

      expect(r1).not.toBe(r2);
    });

    test('does not confound boolean inputs', () => {
      const r1 = mapPropToBreakpoints(true);
      const r2 = mapPropToBreakpoints(false);

      expect(r1).not.toBe(r2);
    });

    test('supports mixed arrays and returns correct mapping', () => {
      const input = ['8', null, '16'];

      const result = mapPropToBreakpoints(input);

      expect(result[BreakPoint.phone]).toBe('8');
      expect(result[BreakPoint.tabletPortrait]).toBeNull();
      expect(result[BreakPoint.tabletLandscape]).toBe('16');
    });

    test('caches mixed array input correctly', () => {
      const arr = ['8', null, '16'];
      const r1 = mapPropToBreakpoints(arr);
      const r2 = mapPropToBreakpoints(arr);

      expect(r1).toBe(r2);
    });

    test('handles large arrays gracefully but still caches', () => {
      const arr = new Array(10).fill('8');
      const r1 = mapPropToBreakpoints(arr);
      const r2 = mapPropToBreakpoints(arr);

      expect(r1).toBe(r2);
    });
  });
});
