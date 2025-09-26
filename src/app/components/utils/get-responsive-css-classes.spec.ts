import { describe, test, expect } from 'vitest';
import { getResponsiveCssClasses } from './get-responsive-css-classes';

describe('getResponsiveCssClasses', () => {
  test('should return empty array if $style argument is not defined', () => {
    expect(getResponsiveCssClasses(null, {}, 'align')).toEqual([]);
  });

  test('should return empty array if breakPointValues argument is not defined', () => {
    expect(getResponsiveCssClasses({}, null, 'align')).toEqual([]);
  });

  test('should return empty array if classPrefix argument is not defined', () => {
    expect(getResponsiveCssClasses({}, {}, null)).toEqual([]);
  });

  test('should return css classes for breakpoint values that are not null', () => {
    expect(
      getResponsiveCssClasses(
        {
          'alignx-start': 'alignx-start',
          'alignx-tp-center': 'alignx-tp-center',
          'alignx-tl-end': 'alignx-tl-end',
        },
        {
          phone: 'start',
          tabletPortrait: 'center',
          tabletLandscape: 'end',
          smallDesktop: null,
          largeDesktop: null,
        },
        'alignx',
      ),
    ).toEqual(['alignx-start', 'alignx-tp-center', 'alignx-tl-end']);
  });

  test('should return css classes for breakpoint values that are not null without attaching the breakpoint value', () => {
    expect(
      getResponsiveCssClasses(
        { fit: 'fit', 'fit-tp': 'fit-tp', 'fit-tl': 'fit-tl', 'fit-sd': 'fit-sd', 'fit-ld': 'fit-ld' },
        {
          phone: true,
          tabletPortrait: true,
          tabletLandscape: true,
          smallDesktop: true,
          largeDesktop: null,
        },
        'fit',
        false,
      ),
    ).toEqual(['fit', 'fit-tp', 'fit-tl', 'fit-sd']);
  });
});
