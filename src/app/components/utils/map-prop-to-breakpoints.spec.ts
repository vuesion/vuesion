import { describe, test, expect } from 'vitest';
import { mapPropToBreakpoints } from './map-prop-to-breakpoints';

describe('mapPropToBreakpoints', () => {
  test('should parse one value', () => {
    expect(mapPropToBreakpoints('24')).toEqual({
      phone: '24',
      tabletPortrait: null,
      tabletLandscape: null,
      smallDesktop: null,
      largeDesktop: null,
    });
  });

  test('should parse one array value', () => {
    expect(mapPropToBreakpoints(['24'])).toEqual({
      phone: '24',
      tabletPortrait: null,
      tabletLandscape: null,
      smallDesktop: null,
      largeDesktop: null,
    });
  });

  test('should parse two values', () => {
    expect(mapPropToBreakpoints(['24', '16'], true)).toEqual({
      phone: '24',
      tabletPortrait: '16',
      tabletLandscape: '16',
      smallDesktop: '16',
      largeDesktop: '16',
    });
  });

  test('should parse two values', () => {
    expect(mapPropToBreakpoints(['24', '16', '32'], true)).toEqual({
      phone: '24',
      tabletPortrait: '16',
      tabletLandscape: '32',
      smallDesktop: '32',
      largeDesktop: '32',
    });
  });

  test('should parse four values', () => {
    expect(mapPropToBreakpoints(['24', '16', '32', '40'], true)).toEqual({
      phone: '24',
      tabletPortrait: '16',
      tabletLandscape: '32',
      smallDesktop: '40',
      largeDesktop: '40',
    });
  });

  test('should parse five values', () => {
    expect(mapPropToBreakpoints(['24', '16', '32', '40', '64'], true)).toEqual({
      phone: '24',
      tabletPortrait: '16',
      tabletLandscape: '32',
      smallDesktop: '40',
      largeDesktop: '64',
    });
  });
});
