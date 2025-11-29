import { beforeEach, describe, it, expect, vi, type Mock } from 'vitest';
import { buildResponsiveFlexDirectionClasses } from './build-responsive-flex-direction-classes';
import { getFlexDirectionForBreakpoint } from '@/components/utils/get-flex-direction-for-breakpoint';

// We mock the helper so we can assert exact calls + control output
vi.mock('@/components/utils/get-flex-direction-for-breakpoint', () => ({
  getFlexDirectionForBreakpoint: vi.fn(),
}));

describe('buildResponsiveFlexDirectionClasses', () => {
  const mockGet = getFlexDirectionForBreakpoint as unknown as Mock;

  const baseReverse = {
    phone: null,
    tabletPortrait: null,
    tabletLandscape: null,
    smallDesktop: null,
    largeDesktop: null,
  };

  const baseStack = {
    phone: false,
    tabletPortrait: false,
    tabletLandscape: false,
    smallDesktop: false,
    largeDesktop: false,
  };

  beforeEach(() => {
    mockGet.mockReset();
  });

  it('returns empty list when all breakpoints produce null', () => {
    mockGet.mockReturnValue(null);

    const result = buildResponsiveFlexDirectionClasses(baseReverse, baseStack);

    expect(result).toEqual([]);
    expect(mockGet).toHaveBeenCalledTimes(5);
  });

  it('passes correct params per breakpoint', () => {
    mockGet.mockReturnValue('X');

    buildResponsiveFlexDirectionClasses(
      {
        phone: true,
        tabletPortrait: false,
        tabletLandscape: null,
        smallDesktop: true,
        largeDesktop: null,
      },
      {
        phone: false,
        tabletPortrait: true,
        tabletLandscape: false,
        smallDesktop: true,
        largeDesktop: false,
      },
    );

    expect(mockGet.mock.calls).toEqual([
      // phone
      [true, false, undefined],
      // tabletPortrait
      [false, true, 'tp'],
      // tabletLandscape
      [null, false, 'tl'],
      // smallDesktop
      [true, true, 'sd'],
      // largeDesktop
      [null, false, 'ld'],
    ]);
  });

  it('collects only non-null classes', () => {
    mockGet
      .mockReturnValueOnce(null)
      .mockReturnValueOnce('A')
      .mockReturnValueOnce(null)
      .mockReturnValueOnce('B')
      .mockReturnValueOnce('C');

    const result = buildResponsiveFlexDirectionClasses(baseReverse, baseStack);

    expect(result).toEqual(['A', 'B', 'C']);
  });

  it('integration case: reverse + stacked combinations', () => {
    mockGet
      .mockReturnValueOnce('flex-row')
      .mockReturnValueOnce('flex-col-tp')
      .mockReturnValueOnce('flex-row-reverse-tl')
      .mockReturnValueOnce('flex-col-reverse-sd')
      .mockReturnValueOnce('flex-row-ld');

    const reverse = {
      phone: false,
      tabletPortrait: null,
      tabletLandscape: true,
      smallDesktop: true,
      largeDesktop: false,
    };

    const stacked = {
      phone: false,
      tabletPortrait: true,
      tabletLandscape: false,
      smallDesktop: true,
      largeDesktop: false,
    };

    const result = buildResponsiveFlexDirectionClasses(reverse, stacked);

    expect(result).toEqual([
      'flex-row', // phone
      'flex-col-tp', // tabletPortrait
      'flex-row-reverse-tl', // tabletLandscape
      'flex-col-reverse-sd', // smallDesktop
      'flex-row-ld', // largeDesktop
    ]);
  });

  it('ensures output order matches breakpoint order', () => {
    mockGet
      .mockReturnValueOnce('1')
      .mockReturnValueOnce('2')
      .mockReturnValueOnce('3')
      .mockReturnValueOnce('4')
      .mockReturnValueOnce('5');

    const result = buildResponsiveFlexDirectionClasses(baseReverse, baseStack);

    expect(result).toEqual(['1', '2', '3', '4', '5']);
  });

  it('uses false when stacked flag is missing for a breakpoint', () => {
    mockGet.mockReturnValue('X');

    const reverse = {
      phone: null,
      tabletPortrait: null,
      tabletLandscape: null,
      smallDesktop: null,
      largeDesktop: null,
    };

    // tabletLandscape intentionally omitted → triggers ?? false branch
    const stacked = {
      phone: true,
      tabletPortrait: true,
      // tabletLandscape missing → undefined → should be false
      smallDesktop: true,
      largeDesktop: true,
    };

    // as any to simulate worst case
    const result = buildResponsiveFlexDirectionClasses(reverse, stacked as any);

    // ensure all breakpoints called
    expect(mockGet).toHaveBeenCalledTimes(5);

    // verify the important call: stacked undefined → false
    expect(mockGet.mock.calls[2]).toEqual([null, false, 'tl']);

    // result is irrelevant — only branch coverage matters
    expect(result.length).toBe(5);
  });
});
