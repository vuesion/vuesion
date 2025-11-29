import type { AllowedResponsiveValue, ResponsiveValue } from '@/components/utils/types';
import { isNilLike } from '@/components/utils/is-nil-like';

import { BREAKPOINT_ORDER } from '@/components/utils/breakpoints';

/**
 * Converts (scalar | array) props into a per-breakpoint mapping.
 */
export const mapPropToBreakpoints = <T extends AllowedResponsiveValue>(
  input: T | T[] | null | undefined,
  interpolate = false,
  filter: (value: T | null) => T | null = (v) => (isNilLike(v) ? null : v),
): ResponsiveValue<T | null> => {
  const result: ResponsiveValue<T | null> = {};

  const isArray = Array.isArray(input);
  const length = isArray ? (input as T[]).length : 1;
  const last = isArray ? (input as T[])[length - 1] : (input as T);

  const bpCount = BREAKPOINT_ORDER.length;

  for (let i = 0; i < bpCount; i++) {
    const bp = BREAKPOINT_ORDER[i]!;

    let value: T | null = null;

    if (isArray) {
      // ARRAY MODE
      if (i < length) {
        value = (input as T[])[i] ?? null;
      } else {
        value = interpolate ? (last ?? null) : null;
      }
    } else {
      // SCALAR MODE
      if (i === 0) {
        value = input ?? null; // phone only
      } else {
        value = interpolate ? (input ?? null) : null;
      }
    }

    result[bp] = filter(value);
  }

  return result;
};
