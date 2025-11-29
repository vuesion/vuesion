import { beforeEach, describe, test, expect, vi } from 'vitest';
import { buildResponsiveClasses } from './build-responsive-classes';
import { BreakPoint } from '#shared/enums/BreakPoint';
import type { ResponsiveValues } from '@/components/utils/types';

describe('buildResponsiveClasses', () => {
  test('scalar mode: generates classes for all breakpoints', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: '8',
        tabletPortrait: '16',
        tabletLandscape: '24',
        smallDesktop: '32',
        largeDesktop: '40',
      },
    });

    expect(result).toEqual(['p-8', 'p-tp-16', 'p-tl-24', 'p-sd-32', 'p-ld-40']);
  });

  test('vector mode: generates directional classes', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: { top: '8', right: '8', bottom: '8', left: '8' },
      },
      directions: { top: 't', right: 'r', bottom: 'b', left: 'l' },
    });

    expect(result).toEqual(['pt-8', 'pr-8', 'pb-8', 'pl-8']);
  });

  test('vector mode: skips null directional values', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: { top: null, right: '8', bottom: null, left: '4' },
      },
      directions: { top: 't', right: 'r', bottom: 'b', left: 'l' },
    });

    expect(result).toEqual(['pr-8', 'pl-4']);
  });

  test('scalar mode: skips null values', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: null,
        tabletPortrait: '8',
        tabletLandscape: null,
        smallDesktop: '16',
        largeDesktop: null,
      },
    });

    expect(result).toEqual(['p-tp-8', 'p-sd-16']);
  });

  test('vector mode: ignores breakpoints with undefined values', () => {
    const result = buildResponsiveClasses({
      prefix: 'm',
      values: {
        phone: { top: '8', right: null, bottom: null, left: null },
        tabletPortrait: undefined,
        tabletLandscape: undefined,
        smallDesktop: undefined,
        largeDesktop: undefined,
      },
      directions: { top: 't', right: 'r', bottom: 'b', left: 'l' },
    });

    expect(result).toEqual(['mt-8']);
  });

  test('applyValueToClassName=false: scalar', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: '8',
        tabletPortrait: '16',
      },
      applyValueToClassName: false,
    });

    expect(result).toEqual([
      'p', // phone (no prefix)
      'p-tp', // next breakpoint
    ]);
  });

  test('applyValueToClassName=false: vector mode', () => {
    const result = buildResponsiveClasses({
      prefix: 'm',
      values: {
        phone: { top: '8', right: '4', bottom: null, left: null },
      },
      directions: { top: 't', right: 'r', bottom: 'b', left: 'l' },
      applyValueToClassName: false,
    });

    expect(result).toEqual(['mt-', 'mr-']);
  });

  test('vector mode: direction order must follow directions object order', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: { top: '1', right: '2', bottom: '3', left: '4' },
      },
      directions: { bottom: 'b', top: 't', left: 'l', right: 'r' },
    });

    // Direction order must follow Object.entries(directions)
    // Values come from the vector provided above
    expect(result).toEqual([
      'pb-3', // bottom:3
      'pt-1', // top:1
      'pl-4', // left:4
      'pr-2', // right:2
    ]);
  });

  test('does nothing when values is empty or all null', () => {
    const result = buildResponsiveClasses({
      prefix: 'p',
      values: {
        phone: null,
        tabletPortrait: null,
        tabletLandscape: null,
        smallDesktop: null,
        largeDesktop: null,
      },
    });

    expect(result).toEqual([]);
  });

  describe('buildResponsiveClasses (memo behavior)', () => {
    beforeEach(() => {
      // Fully reload module between tests to clear internal memo caches
      vi.resetModules();
    });

    const valuesScalar: ResponsiveValues = {
      phone: '8',
      tabletPortrait: '16',
      tabletLandscape: '24',
      smallDesktop: null,
      largeDesktop: '64',
    };

    const valuesVector: ResponsiveValues = {
      phone: { top: '1', right: '2', bottom: '3', left: '4' },
      tabletPortrait: { top: '5', right: '6', bottom: '7', left: '8' },
      tabletLandscape: null,
      smallDesktop: null,
      largeDesktop: null,
    };

    // ------------------------------------------------------------
    // SCALAR MODE
    // ------------------------------------------------------------
    test('builds scalar classes per breakpoint', () => {
      const result = buildResponsiveClasses({
        prefix: 'gap',
        values: valuesScalar,
      });

      expect(result).toEqual(
        [
          'gap-8', // phone
          'gap-tp-16', // tabletPortrait
          'gap-tl-24', // tabletLandscape
          'gap-ld-64', // largeDesktop
        ].filter(Boolean),
      );
    });

    test('skips null and undefined scalar values', () => {
      const values: ResponsiveValues = {
        phone: null,
        tabletPortrait: undefined,
        tabletLandscape: '8',
        smallDesktop: null,
        largeDesktop: undefined,
      };

      const result = buildResponsiveClasses({
        prefix: 'gap',
        values,
      });

      expect(result).toEqual(['gap-tl-8']);
    });

    // ------------------------------------------------------------
    // VECTOR MODE
    // ------------------------------------------------------------
    test('builds vector classes respecting direction order', () => {
      const result = buildResponsiveClasses({
        prefix: 'p',
        values: valuesVector,
        directions: { bottom: 'b', top: 't', left: 'l', right: 'r' },
      });

      // Only phone & tabletPortrait have vector values
      expect(result).toEqual([
        // phone
        'pb-3',
        'pt-1',
        'pl-4',
        'pr-2',

        // tabletPortrait
        'pb-tp-7',
        'pt-tp-5',
        'pl-tp-8',
        'pr-tp-6',
      ]);
    });

    test('skips null vector values', () => {
      const values: ResponsiveValues = {
        phone: { top: '1', right: null, bottom: '2', left: undefined as any },
        tabletPortrait: null,
        tabletLandscape: null,
        smallDesktop: null,
        largeDesktop: null,
      };

      const result = buildResponsiveClasses({
        prefix: 'm',
        values,
        directions: { top: 't', right: 'r', bottom: 'b', left: 'l' },
      });

      expect(result).toEqual(['mt-1', 'mb-2']);
    });

    // ------------------------------------------------------------
    // APPLY VALUE FLAG
    // ------------------------------------------------------------
    test('supports applyValueToClassName = false', () => {
      const result = buildResponsiveClasses({
        prefix: 'foo',
        values: {
          phone: 'A',
          tabletPortrait: 'B',
          tabletLandscape: null,
          smallDesktop: 'C',
          largeDesktop: null,
        },
        applyValueToClassName: false,
      });

      expect(result).toEqual([
        'foo', // phone
        'foo-tp', // tabletPortrait
        // skip tl
        'foo-sd', // smallDesktop
        // skip ld
      ]);
    });

    // ------------------------------------------------------------
    // MEMOIZATION
    // ------------------------------------------------------------
    test('returns same reference when called with identical params (cache hit)', () => {
      const params = {
        prefix: 'x',
        values: valuesScalar,
        directions: undefined,
        applyValueToClassName: true,
      };

      const r1 = buildResponsiveClasses(params);
      const r2 = buildResponsiveClasses(params);

      expect(r1).toBe(r2);
    });

    test('returns different reference when values object changes', () => {
      const params1 = {
        prefix: 'x',
        values: valuesScalar,
        directions: undefined,
        applyValueToClassName: true,
      };

      const params2 = {
        ...params1,
        values: { ...valuesScalar }, // new reference
      };

      const r1 = buildResponsiveClasses(params1);
      const r2 = buildResponsiveClasses(params2);

      expect(r1).not.toBe(r2);
    });

    test('returns different reference when directions differ', () => {
      const baseValues = { ...valuesScalar };

      const r1 = buildResponsiveClasses({
        prefix: 'x',
        values: baseValues,
        directions: undefined,
      });

      const r2 = buildResponsiveClasses({
        prefix: 'x',
        values: baseValues,
        directions: { top: 't' },
      });

      expect(r1).not.toBe(r2);
    });

    test('caches per (prefix → directions → values → flag)', () => {
      const values = valuesScalar;
      const d1 = { top: 't', bottom: 'b' };
      const d2 = { left: 'l' };

      const r1 = buildResponsiveClasses({ prefix: 'p', values, directions: d1 });
      const r2 = buildResponsiveClasses({ prefix: 'p', values, directions: d1 });
      const r3 = buildResponsiveClasses({ prefix: 'p', values, directions: d2 });
      const r4 = buildResponsiveClasses({ prefix: 'p', values, directions: d2 });

      expect(r1).toBe(r2); // same directions
      expect(r3).toBe(r4); // same directions #2
      expect(r1).not.toBe(r3); // different directions set
    });

    // ------------------------------------------------------------
    // BREAKPOINT ORDER VALIDATION
    // ------------------------------------------------------------
    test('calls breakpoints in the proper order', () => {
      const calls: Array<BreakPoint> = [];

      const mockValues: ResponsiveValues = {
        phone: 'a',
        tabletPortrait: 'b',
        tabletLandscape: 'c',
        smallDesktop: 'd',
        largeDesktop: 'e',
      };

      const result = buildResponsiveClasses({
        prefix: 'x',
        values: mockValues,
      });

      // Extract breakpoints from result for sanity
      const bpOrder = result.map((cls) => {
        if (cls.includes('-tp-')) return BreakPoint.tabletPortrait;
        if (cls.includes('-tl-')) return BreakPoint.tabletLandscape;
        if (cls.includes('-sd-')) return BreakPoint.smallDesktop;
        if (cls.includes('-ld-')) return BreakPoint.largeDesktop;
        return BreakPoint.phone;
      });

      expect(bpOrder).toEqual([
        BreakPoint.phone,
        BreakPoint.tabletPortrait,
        BreakPoint.tabletLandscape,
        BreakPoint.smallDesktop,
        BreakPoint.largeDesktop,
      ]);
    });
  });
});
