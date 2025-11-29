import type { AllowedResponsiveValue, ResponsiveValue } from '@/components/utils/types';
import { isNilLike } from '@/components/utils/is-nil-like';
import { BREAKPOINT_ORDER } from '@/components/utils/breakpoints';

/**
 * Internal non-memoized implementation.
 */
const _mapPropToBreakpoints = <T extends AllowedResponsiveValue>(
  input: T | T[] | null | undefined,
  interpolate: boolean,
  filter: (value: T | null) => T | null,
): ResponsiveValue<T | null> => {
  const result: ResponsiveValue<T | null> = {};

  const isArray = Array.isArray(input);
  const length = isArray ? input.length : 1;
  const last = isArray ? input[length - 1] : (input as T);

  const bpCount = BREAKPOINT_ORDER.length;

  for (let i = 0; i < bpCount; i++) {
    const bp = BREAKPOINT_ORDER[i]!;
    let value: T | null = null;

    if (isArray) {
      if (i < length) {
        value = input[i] ?? null;
      } else {
        value = interpolate ? (last ?? null) : null;
      }
    } else {
      value = i === 0 ? (input ?? null) : interpolate ? (input ?? null) : null;
    }

    result[bp] = filter(value);
  }

  return result;
};

/**
 * Fast identity-based memoization.
 * Caches by reference for arrays and direct value for primitives.
 */
const mapCache = new WeakMap<object, Map<string, any>>();
const primitiveCache = new Map<any, Map<string, any>>();

/**
 * Memoized public version.
 */
export const mapPropToBreakpoints = <T extends AllowedResponsiveValue>(
  input: T | T[] | null | undefined,
  interpolate = false,
  filter: (value: T | null) => T | null = (v) => (isNilLike(v) ? null : v),
): ResponsiveValue<T | null> => {
  const cacheKey = `${interpolate}`;

  // Handle primitives (string, number, boolean, null)
  if (input === null || typeof input !== 'object') {
    let subCache = primitiveCache.get(input);
    if (!subCache) {
      subCache = new Map();
      primitiveCache.set(input, subCache);
    }

    if (subCache.has(cacheKey)) {
      return subCache.get(cacheKey);
    }

    const result = _mapPropToBreakpoints(input, interpolate, filter);
    subCache.set(cacheKey, result);
    return result;
  }

  // Handle array or object → reference-based memo
  let subCache = mapCache.get(input);
  if (!subCache) {
    subCache = new Map();
    mapCache.set(input, subCache);
  }

  if (subCache.has(cacheKey)) {
    return subCache.get(cacheKey);
  }

  const result = _mapPropToBreakpoints(input, interpolate, filter);
  subCache.set(cacheKey, result);
  return result;
};
