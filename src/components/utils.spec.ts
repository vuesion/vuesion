import { describe, test, expect } from 'vitest';
import {
  getCssSpacingClasses,
  getResponsiveCssClasses,
  isNullOrUndefined,
  parseCssSpacingProp,
  parseResponsivePropValue,
} from '@/components/utils';

describe('component utils', () => {
  describe('isNullOrUndefined', () => {
    test('should return true if null or undefined', () => {
      expect(isNullOrUndefined(null)).toBeTruthy();
      expect(isNullOrUndefined(undefined)).toBeTruthy();
    });

    test('should return true if "null" or "undefined"', () => {
      expect(isNullOrUndefined('null')).toBeTruthy();
      expect(isNullOrUndefined('undefined')).toBeTruthy();
    });
  });

  describe('parseCssSpacingProp', () => {
    test('should handle null value', () => {
      expect(parseCssSpacingProp(null)).toEqual({ top: null, right: null, bottom: null, left: null });
    });

    test('should parse one padding value', () => {
      expect(parseCssSpacingProp('24')).toEqual({ top: '24', right: '24', bottom: '24', left: '24' });
    });

    test('should parse two padding values', () => {
      expect(parseCssSpacingProp('24 16')).toEqual({ top: '24', right: '16', bottom: '24', left: '16' });
    });

    test('should parse three padding values', () => {
      expect(parseCssSpacingProp('24 16 8')).toEqual({ top: '24', right: '16', bottom: '8', left: '16' });
    });

    test('should parse four padding values', () => {
      expect(parseCssSpacingProp('24 16 8 4')).toEqual({ top: '24', right: '16', bottom: '8', left: '4' });
    });
  });

  describe('parseResponsivePropValue', () => {
    test('should parse one value', () => {
      expect(parseResponsivePropValue('24')).toEqual({
        phone: '24',
        tabletPortrait: null,
        tabletLandscape: null,
        smallDesktop: null,
        largeDesktop: null,
      });
    });

    test('should parse one array value', () => {
      expect(parseResponsivePropValue(['24'])).toEqual({
        phone: '24',
        tabletPortrait: null,
        tabletLandscape: null,
        smallDesktop: null,
        largeDesktop: null,
      });
    });

    test('should parse two values', () => {
      expect(parseResponsivePropValue(['24', '16'], true)).toEqual({
        phone: '24',
        tabletPortrait: '16',
        tabletLandscape: '16',
        smallDesktop: '16',
        largeDesktop: '16',
      });
    });

    test('should parse two values', () => {
      expect(parseResponsivePropValue(['24', '16', '32'], true)).toEqual({
        phone: '24',
        tabletPortrait: '16',
        tabletLandscape: '32',
        smallDesktop: '32',
        largeDesktop: '32',
      });
    });

    test('should parse four values', () => {
      expect(parseResponsivePropValue(['24', '16', '32', '40'], true)).toEqual({
        phone: '24',
        tabletPortrait: '16',
        tabletLandscape: '32',
        smallDesktop: '40',
        largeDesktop: '40',
      });
    });

    test('should parse five values', () => {
      expect(parseResponsivePropValue(['24', '16', '32', '40', '64'], true)).toEqual({
        phone: '24',
        tabletPortrait: '16',
        tabletLandscape: '32',
        smallDesktop: '40',
        largeDesktop: '64',
      });
    });
  });

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

  describe('getCssSpacingClasses', () => {
    test('should return spacing classes for all directions that are not null without breakpoint prefix', () => {
      expect(
        getCssSpacingClasses(
          {
            'pt-8': 'pt-8',
            'pr-8': 'pr-8',
            'pb-8': 'pb-8',
            'pl-8': 'pl-8',
          },
          {
            top: '8',
            right: '8',
            bottom: '8',
            left: 'null',
          },
          'p',
        ),
      ).toEqual(['pt-8', 'pr-8', 'pb-8']);
    });

    test('should return spacing classes for all directions that are not null with breakpoint prefix', () => {
      expect(
        getCssSpacingClasses(
          {
            'pt-sd-8': 'pt-sd-8',
            'pr-sd-8': 'pr-sd-8',
            'pb-sd-8': 'pb-sd-8',
            'pl-sd-8': 'pl-sd-8',
          },
          {
            top: '8',
            right: '8',
            bottom: '8',
            left: '8',
          },
          'p',
          'sd',
        ),
      ).toEqual(['pt-sd-8', 'pr-sd-8', 'pb-sd-8', 'pl-sd-8']);
    });
  });
});
