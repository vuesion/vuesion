import memoize from 'fast-memoize';
import type { DirectionsMap } from '@/components/utils/types';
import { isNilLike } from '@/components/utils/is-nil-like';

export const parseSpacingShorthand = memoize((spacing: string | null): DirectionsMap => {
  if (isNilLike(spacing)) {
    return EMPTY;
  }

  const str = spacing!.trim();

  if (str.length === 0) {
    return EMPTY;
  }

  // Pre-allocate fixed array (4) for directions
  let t: string | null;
  let r: string | null;
  let b: string | null;
  let l: string | null;

  // We don't want split() (slow), so we parse manually.
  const tokens: string[] = [];
  let current = '';
  const len = str.length;

  for (let i = 0; i < len; i++) {
    const c = str[i];

    if (c === ' ') {
      if (current !== '') {
        tokens.push(current);
        if (tokens.length === 4) break; // ignore >4 tokens
        current = '';
      }
    } else {
      current += c;
    }
  }

  tokens.push(current);

  const count = tokens.length;

  switch (count) {
    case 1: {
      t = r = b = l = tokens[0]!;
      break;
    }
    case 2: {
      t = b = tokens[0]!;
      r = l = tokens[1]!;
      break;
    }
    case 3: {
      t = tokens[0]!;
      r = l = tokens[1]!;
      b = tokens[2]!;
      break;
    }
    default: {
      // 4 or more
      t = tokens[0]!;
      r = tokens[1]!;
      b = tokens[2]!;
      l = tokens[3]!;
    }
  }

  return {
    top: t,
    right: r,
    bottom: b,
    left: l,
  };
});

/** Pre-allocated ZERO-object (no new objects created on null-input). */
const EMPTY: DirectionsMap = {
  top: null,
  right: null,
  bottom: null,
  left: null,
};
