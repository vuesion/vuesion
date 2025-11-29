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
});
