import { forEachBreakpoint } from './breakpoints';
import type { ResponsiveValues, ScalarValue, VectorValue } from '@/components/utils/types';

export interface BuildResponsiveClassesOptions {
  prefix: string;
  values: ResponsiveValues;
  directions?: Record<string, string>;
  applyValueToClassName?: boolean;
}

export const buildResponsiveClasses = (options: BuildResponsiveClassesOptions): string[] => {
  const { prefix, values, directions, applyValueToClassName = true } = options;

  const classes: string[] = [];

  forEachBreakpoint((breakpoint, bpPrefix) => {
    const value = values[breakpoint];
    if (value === null || value === undefined) return;

    if (directions) {
      const vector = value as VectorValue;

      for (const [prop, short] of Object.entries(directions)) {
        const directionalValue = vector[prop];
        if (directionalValue === null || directionalValue === undefined) continue;

        const className = applyValueToClassName
          ? `${prefix}${short}-${bpPrefix ? bpPrefix + '-' : ''}${directionalValue}`
          : `${prefix}${short}-${bpPrefix}`;

        classes.push(className);
      }

      return;
    }

    const scalar = value as ScalarValue;

    const className = applyValueToClassName
      ? `${prefix}${bpPrefix ? '-' + bpPrefix : ''}-${scalar}`
      : `${prefix}${bpPrefix ? '-' + bpPrefix : ''}`;

    classes.push(className);
  });

  return classes;
};
