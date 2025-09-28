import type { IBreakpoints } from '#shared/interfaces/ui/IBreakpoints';
import { isNilLike } from '@/components/utils/is-nil-like';

export const getResponsiveCssClasses = (
  $style: any,
  breakPointValues: IBreakpoints | any,
  classPrefix: string | null,
  applyValueToClassName = true,
): Array<string> => {
  const map: IBreakpoints | any = {
    phone: '',
    tabletPortrait: '-tp',
    tabletLandscape: '-tl',
    smallDesktop: '-sd',
    largeDesktop: '-ld',
  };
  const cssClasses: Array<string> = [];

  if (!breakPointValues || !classPrefix) {
    return [];
  }

  Object.keys(breakPointValues).forEach((key) => {
    const breakPointValue = breakPointValues[key];
    const breakPointPrefix = map[key];

    if (isNilLike(breakPointValue) === false) {
      const className = applyValueToClassName
        ? `${classPrefix}${breakPointPrefix}-${breakPointValue}`
        : `${classPrefix}${breakPointPrefix}`;
      const cssClassName = $style ? $style[className] : className;

      cssClasses.push(cssClassName);
    }
  });

  return cssClasses;
};
