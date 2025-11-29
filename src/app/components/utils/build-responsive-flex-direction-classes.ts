import { forEachBreakpoint } from '@/components/utils/breakpoints';
import type { ResponsiveValue } from '@/components/utils/types';
import type { BreakPoint } from '#shared/enums/BreakPoint';
import { getFlexDirectionForBreakpoint } from '@/components/utils/get-flex-direction-for-breakpoint';

export interface ResponsiveStackFlags {
  phone: boolean;
  tabletPortrait: boolean;
  tabletLandscape: boolean;
  smallDesktop: boolean;
  largeDesktop: boolean;
}

/**
 * Non-memoized internal implementation.
 */
const _buildResponsiveFlexDirectionClasses = (
  reverse: ResponsiveValue<boolean | null>,
  stacked: ResponsiveStackFlags,
): Array<string> => {
  const classes: Array<string> = [];

  forEachBreakpoint((bp: BreakPoint, bpPrefix: string) => {
    const reverseValue = reverse[bp] ?? null;
    const isStacked = stacked[bp] ?? false;

    const cls = getFlexDirectionForBreakpoint(reverseValue, isStacked, bpPrefix || undefined);

    if (cls) {
      classes.push(cls);
    }
  });

  return classes;
};

/**
 * Memo cache:
 * reverse → WeakMap
 *   stacked → Map → result
 */
const reverseCache = new WeakMap<object, Map<object, Array<string>>>();

export const buildResponsiveFlexDirectionClasses = (
  reverse: ResponsiveValue<boolean | null>,
  stacked: ResponsiveStackFlags,
): Array<string> => {
  // level 1: reverse object
  let stackedCache = reverseCache.get(reverse);
  if (!stackedCache) {
    stackedCache = new Map();
    reverseCache.set(reverse, stackedCache);
  }

  // level 2: stacked object
  const existing = stackedCache.get(stacked);
  if (existing) {
    return existing;
  }

  // compute → cache → return
  const result = _buildResponsiveFlexDirectionClasses(reverse, stacked);
  stackedCache.set(stacked, result);
  return result;
};
