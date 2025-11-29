import { beforeEach, describe, test, expect, vi, type Mock } from 'vitest';
import { buildResponsiveFlexDirectionClasses } from './build-responsive-flex-direction-classes';
import { getFlexDirectionForBreakpoint } from '@/components/utils/get-flex-direction-for-breakpoint';

// We mock the helper so we can assert exact calls + control output
vi.mock('@/components/utils/get-flex-direction-for-breakpoint', () => ({
  getFlexDirectionForBreakpoint: vi.fn(),
}));

describe('buildResponsiveFlexDirectionClasses', () => {
  const mockGet = getFlexDirectionForBreakpoint as unknown as Mock;

  const mkBaseReverse = () => ({
    phone: true,
    tabletPortrait: true,
    tabletLandscape: true,
    smallDesktop: true,
    largeDesktop: true,
  });

  const mkBaseStack = () => ({
    phone: false,
    tabletPortrait: false,
    tabletLandscape: false,
    smallDesktop: false,
    largeDesktop: false,
  });

  beforeEach(() => {
    mockGet.mockReset();
  });

  test('returns empty list when all breakpoints produce null', () => {
    mockGet.mockReturnValue(null);

    const result = buildResponsiveFlexDirectionClasses(mkBaseReverse(), mkBaseStack());

    expect(result).toEqual([]);
    expect(mockGet).toHaveBeenCalledTimes(5);
  });

  test('passes correct params per breakpoint', () => {
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

  test('collects only non-null classes', () => {
    mockGet
      .mockReturnValueOnce(null)
      .mockReturnValueOnce('A')
      .mockReturnValueOnce(null)
      .mockReturnValueOnce('B')
      .mockReturnValueOnce('C');

    const result = buildResponsiveFlexDirectionClasses(mkBaseReverse(), mkBaseStack());

    expect(result).toEqual(['A', 'B', 'C']);
  });

  test('integration case: reverse + stacked combinations', () => {
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

  test('ensures output order matches breakpoint order', () => {
    mockGet
      .mockReturnValueOnce('1')
      .mockReturnValueOnce('2')
      .mockReturnValueOnce('3')
      .mockReturnValueOnce('4')
      .mockReturnValueOnce('5');

    const result = buildResponsiveFlexDirectionClasses(mkBaseReverse(), mkBaseStack());

    expect(result).toEqual(['1', '2', '3', '4', '5']);
  });

  test('uses false when stacked flag is missing for a breakpoint', () => {
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

  test('memoization: returns cached array on second call (existing branch)', () => {
    mockGet.mockReturnValue('cached');

    const reverse = {
      phone: true,
      tabletPortrait: true,
      tabletLandscape: true,
      smallDesktop: true,
      largeDesktop: true,
    };

    const stacked = {
      phone: false,
      tabletPortrait: false,
      tabletLandscape: false,
      smallDesktop: false,
      largeDesktop: false,
    };

    // first call → triggers computation
    const first = buildResponsiveFlexDirectionClasses(reverse, stacked);

    // reset mock so we can detect if second call recomputes
    mockGet.mockClear();

    // second call → MUST hit memo branch and NOT call mocked function
    const second = buildResponsiveFlexDirectionClasses(reverse, stacked);

    // 1) same reference → memo returned cached value
    expect(second).toBe(first);

    // 2) no calls → ensures branch short-circuited via "existing" branch
    expect(mockGet).not.toHaveBeenCalled();
  });
});
