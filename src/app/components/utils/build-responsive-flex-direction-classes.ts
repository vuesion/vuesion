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

export const buildResponsiveFlexDirectionClasses = (
  reverse: ResponsiveValue<boolean | null>,
  stacked: ResponsiveStackFlags,
): string[] => {
  const classes: string[] = [];

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
