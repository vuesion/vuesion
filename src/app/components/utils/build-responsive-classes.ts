import { forEachBreakpoint } from './breakpoints';
import type { ResponsiveValues, ScalarValue, VectorValue } from '@/components/utils/types';

/**
 * Internal non-memoized implementation.
 */
const _buildResponsiveClasses = (
  prefix: string,
  values: ResponsiveValues,
  directions: Record<string, string> | undefined,
  applyValueToClassName: boolean,
): Array<string> => {
  const classes: Array<string> = [];

  forEachBreakpoint((bp, bpPrefix) => {
    const value = values[bp];
    if (value === null || value === undefined) return;

    // Vector mode
    if (directions) {
      const vector = value as VectorValue;
      for (const [prop, short] of Object.entries(directions)) {
        const directionalValue = vector[prop];
        if (directionalValue == null) continue;

        const cls = applyValueToClassName
          ? `${prefix}${short}-${bpPrefix ? bpPrefix + '-' : ''}${directionalValue}`
          : `${prefix}${short}-${bpPrefix}`;

        classes.push(cls);
      }
      return;
    }

    // Scalar mode
    const scalar = value as ScalarValue;
    const cls = applyValueToClassName
      ? `${prefix}${bpPrefix ? '-' + bpPrefix : ''}-${scalar}`
      : `${prefix}${bpPrefix ? '-' + bpPrefix : ''}`;

    classes.push(cls);
  });

  return classes;
};

/**
 * Memo cache layers:
 * 1) prefix      → primitive Map
 * 2) directions  → WeakMap
 * 3) values      → WeakMap
 * 4) applyValueToClassName flag → Map
 */
const prefixCache = new Map<string, WeakMap<object, WeakMap<object, Map<string, Array<string>>>>>();

export const buildResponsiveClasses = (options: {
  prefix: string;
  values: ResponsiveValues;
  directions?: Record<string, string>;
  applyValueToClassName?: boolean;
}): Array<string> => {
  const { prefix, values, directions, applyValueToClassName = true } = options;

  // 1) Prefix level
  let dirCache = prefixCache.get(prefix);
  if (!dirCache) {
    dirCache = new WeakMap();
    prefixCache.set(prefix, dirCache);
  }

  const dirsKey = directions || EMPTY_OBJ; // stable ref
  // 2) Directions level
  let valuesCache = dirCache.get(dirsKey);
  if (!valuesCache) {
    valuesCache = new WeakMap();
    dirCache.set(dirsKey, valuesCache);
  }

  // 3) Values object level
  let applyFlagCache = valuesCache.get(values);
  if (!applyFlagCache) {
    applyFlagCache = new Map();
    valuesCache.set(values, applyFlagCache);
  }

  const flagKey = applyValueToClassName ? '1' : '0';

  // 4) Check final cache
  if (applyFlagCache.has(flagKey)) {
    return applyFlagCache.get(flagKey)!;
  }

  // Compute → store → return
  const result = _buildResponsiveClasses(prefix, values, directions, applyValueToClassName);
  applyFlagCache.set(flagKey, result);
  return result;
};

const EMPTY_OBJ = {};
