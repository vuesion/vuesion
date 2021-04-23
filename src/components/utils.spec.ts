import {
  applyResponsiveClasses,
  decorateChildComponents,
  getComponentElementType,
  parseCssSpacingProp,
  parseResponsivePropValue,
} from '@/components/utils';
import { IBreakpoints } from '@/interfaces/IBreakpoints';

describe('component utils', () => {
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

  describe('decorateChildComponents', () => {
    test('should handle null as child value', () => {
      expect(
        decorateChildComponents(null, (node) => {
          node.tag = 'p';
          return node;
        }),
      ).toEqual(null);
    });

    test('should handle null as callback value', () => {
      const nodes: any[] = [
        { id: 1, tag: 'div' },
        { id: 2, tag: 'div' },
      ];
      expect(decorateChildComponents(nodes, null)).toEqual(nodes);
    });

    test('should change each child based on a callback', () => {
      const nodes: any[] = [
        { id: 1, tag: 'div' },
        { id: 2, tag: 'div' },
      ];
      expect(
        decorateChildComponents(nodes, (node) => {
          node.tag = 'p';
          return node;
        }),
      ).toEqual([
        { id: 1, tag: 'p' },
        { id: 2, tag: 'p' },
      ]);
    });
  });

  describe('applyResponsiveClasses', () => {
    test('should handle null as $style', () => {
      const $style: any = null;
      const breakPointValues: IBreakpoints = {
        phone: 8,
        tabletPortrait: 8,
        tabletLandscape: 8,
        smallDesktop: 8,
        largeDesktop: 8,
      };

      expect(applyResponsiveClasses($style, {}, breakPointValues, 'space')).toEqual({});
    });

    test('should handle null as classesObject', () => {
      const $style: any = {
        'space-8': 'space-8',
        'space-tp-8': 'space-tp-8',
        'space-tl-8': 'space-tl-8',
        'space-sd-8': 'space-sd-8',
        'space-ld-8': 'space-ld-8',
        fit: 'fit',
        'fit-tp': 'fit-tp',
        'fit-tl': 'fit-tl',
        'fit-sd': 'fit-sd',
        'fit-ld': 'fit-ld',
      };
      const breakPointValues: IBreakpoints = {
        phone: 8,
        tabletPortrait: 8,
        tabletLandscape: 8,
        smallDesktop: 8,
        largeDesktop: 8,
      };

      expect(applyResponsiveClasses($style, null, breakPointValues, 'space')).toEqual({
        'space-8': true,
        'space-ld-8': true,
        'space-sd-8': true,
        'space-tl-8': true,
        'space-tp-8': true,
      });
    });

    test('should handle null as breakPointValues', () => {
      const $style: any = {
        'space-8': 'space-8',
        'space-tp-8': 'space-tp-8',
        'space-tl-8': 'space-tl-8',
        'space-sd-8': 'space-sd-8',
        'space-ld-8': 'space-ld-8',
        fit: 'fit',
        'fit-tp': 'fit-tp',
        'fit-tl': 'fit-tl',
        'fit-sd': 'fit-sd',
        'fit-ld': 'fit-ld',
      };

      expect(applyResponsiveClasses($style, {}, null, 'space')).toEqual({});
    });

    test('should handle null as classPrefix', () => {
      const $style: any = {
        'space-8': 'space-8',
        'space-tp-8': 'space-tp-8',
        'space-tl-8': 'space-tl-8',
        'space-sd-8': 'space-sd-8',
        'space-ld-8': 'space-ld-8',
        fit: 'fit',
        'fit-tp': 'fit-tp',
        'fit-tl': 'fit-tl',
        'fit-sd': 'fit-sd',
        'fit-ld': 'fit-ld',
      };
      const breakPointValues: IBreakpoints = {
        phone: 8,
        tabletPortrait: 8,
        tabletLandscape: 8,
        smallDesktop: 8,
        largeDesktop: 8,
      };

      expect(applyResponsiveClasses($style, {}, breakPointValues, null)).toEqual({});
    });

    test('should apply responsive classes', () => {
      const $style: any = {
        'space-8': 'space-8',
        'space-tp-8': 'space-tp-8',
        'space-tl-8': 'space-tl-8',
        'space-sd-8': 'space-sd-8',
        'space-ld-8': 'space-ld-8',
        fit: 'fit',
        'fit-tp': 'fit-tp',
        'fit-tl': 'fit-tl',
        'fit-sd': 'fit-sd',
        'fit-ld': 'fit-ld',
      };
      const breakPointValues: IBreakpoints = {
        phone: 8,
        tabletPortrait: 8,
        tabletLandscape: 8,
        smallDesktop: 8,
        largeDesktop: 8,
      };

      expect(applyResponsiveClasses($style, {}, breakPointValues, 'space')).toEqual({
        'space-8': true,
        'space-ld-8': true,
        'space-sd-8': true,
        'space-tl-8': true,
        'space-tp-8': true,
      });

      expect(applyResponsiveClasses($style, {}, breakPointValues, 'fit', false)).toEqual({
        fit: true,
        'fit-ld': true,
        'fit-sd': true,
        'fit-tl': true,
        'fit-tp': true,
      });
    });

    test('should apply responsive classes with null values', () => {
      const $style: any = {
        'space-8': 'space-8',
        'space-tp-8': 'space-tp-8',
        'space-tl-8': 'space-tl-8',
        'space-sd-8': 'space-sd-8',
        'space-ld-8': 'space-ld-8',
        fit: 'fit',
        'fit-tp': 'fit-tp',
        'fit-tl': 'fit-tl',
        'fit-sd': 'fit-sd',
        'fit-ld': 'fit-ld',
      };
      const breakPointValues: IBreakpoints = {
        phone: 8,
        tabletPortrait: 8,
        tabletLandscape: 8,
        smallDesktop: 8,
        largeDesktop: null,
      };

      expect(applyResponsiveClasses($style, {}, breakPointValues, 'space')).toEqual({
        'space-8': true,
        'space-tp-8': true,
        'space-tl-8': true,
        'space-sd-8': true,
      });

      expect(applyResponsiveClasses($style, {}, breakPointValues, 'fit', false)).toEqual({
        fit: true,
        'fit-tp': true,
        'fit-tl': true,
        'fit-sd': true,
      });
    });
  });

  describe('getComponentElementType', () => {
    test('should handle null as elementType', () => {
      expect(getComponentElementType(null)).toBe('div');
    });

    test('should handle null as elementType and fallback', () => {
      expect(getComponentElementType(null, null)).toBe('div');
    });

    test('should return fallback for non-list element types', () => {
      expect(getComponentElementType('div', 'p')).toBe('p');

      expect(getComponentElementType('p')).toBe('div');
    });

    test('should return li for list element types', () => {
      expect(getComponentElementType('ul')).toBe('li');

      expect(getComponentElementType('ol')).toBe('li');
    });
  });
});
