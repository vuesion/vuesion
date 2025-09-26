import type { CssSpacing } from '@/components/utils/types';
import { isNilLike } from '@/components/utils/is-nil-like';

export const parseSpacingShorthand = (spacingPropValue: string | null): CssSpacing => {
  const values = !isNilLike(spacingPropValue)
    ? spacingPropValue
        ?.toString()
        .split(' ')
        .map((value) => value)
    : null;

  if (values === null || values === undefined) {
    return {
      top: null,
      right: null,
      bottom: null,
      left: null,
    };
  }

  const result: CssSpacing = {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  };

  if (values.length === 4) {
    result.top = values[0];
    result.right = values[1];
    result.bottom = values[2];
    result.left = values[3];
  } else if (values.length === 3) {
    result.top = values[0];
    result.right = values[1];
    result.bottom = values[2];
    result.left = values[1];
  } else if (values.length === 2) {
    result.top = values[0];
    result.right = values[1];
    result.bottom = values[0];
    result.left = values[1];
  } else {
    result.top = values[0];
    result.right = values[0];
    result.bottom = values[0];
    result.left = values[0];
  }

  return result;
};
