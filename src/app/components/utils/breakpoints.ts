import { BreakPoint } from '#shared/enums/BreakPoint';

export const BREAKPOINTS: Record<BreakPoint, string> = {
  [BreakPoint.phone]: '',
  [BreakPoint.tabletPortrait]: 'tp',
  [BreakPoint.tabletLandscape]: 'tl',
  [BreakPoint.smallDesktop]: 'sd',
  [BreakPoint.largeDesktop]: 'ld',
} as const;

// Canonical, predictable order
export const BREAKPOINT_ORDER: BreakPoint[] = [
  BreakPoint.phone,
  BreakPoint.tabletPortrait,
  BreakPoint.tabletLandscape,
  BreakPoint.smallDesktop,
  BreakPoint.largeDesktop,
];

export type BreakpointPrefix = (typeof BREAKPOINTS)[BreakPoint];

/**
 * Iterates through breakpoints in correct order.
 */
export const forEachBreakpoint = (fn: (breakpoint: BreakPoint, prefix: BreakpointPrefix) => void): void => {
  BREAKPOINT_ORDER.forEach((bp) => fn(bp, BREAKPOINTS[bp]));
};
