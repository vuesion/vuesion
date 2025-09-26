import type { CssSpacing } from '@/components/utils/types';
import { isNilLike } from '@/components/utils/is-nil-like';

export const getCssSpacingClasses = (
  $style: any,
  values: CssSpacing,
  classNamePrefix: string,
  breakpointPrefix: string | null = null,
) => {
  const classes: Array<string> = [];
  const map: any = {
    top: 't',
    right: 'r',
    bottom: 'b',
    left: 'l',
  };

  Object.keys(map).forEach((key) => {
    const prefix = map[key];
    const value = values[key];
    const className = `${classNamePrefix}${prefix}-${breakpointPrefix ? breakpointPrefix + '-' : ''}${value}`;

    if (isNilLike(value) === false) {
      classes.push($style ? $style[className] : className);
    }
  });

  return classes;
};
