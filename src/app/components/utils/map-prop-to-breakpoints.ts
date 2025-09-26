import { isNilLike } from '@/components/utils/is-nil-like';
import type { IBreakpoints } from '~/interfaces/IBreakpoints';
import { BreakpointValues } from '@/components/utils/prop-types';

export const mapPropToBreakpoints = (
  propValues: any | any[],
  interpolate = false,
  filterFunction = (value: any): any => {
    return !isNilLike(value) ? value : null;
  },
): IBreakpoints => {
  const propAsArray: any[] = Array.isArray(propValues) ? propValues : [propValues];
  const result: IBreakpoints | any = {
    phone: null,
    tabletPortrait: null,
    tabletLandscape: null,
    smallDesktop: null,
    largeDesktop: null,
  };

  if (interpolate && propAsArray.length < BreakpointValues.length) {
    const lastValue: any = propAsArray[propAsArray.length - 1];
    const diff = BreakpointValues.length - propAsArray.length;

    for (let i = 0; i < diff; i++) {
      propAsArray.push(lastValue);
    }
  }

  BreakpointValues.forEach((name, index) => {
    result[name] = filterFunction(propAsArray[index]);
  });

  return result;
};
