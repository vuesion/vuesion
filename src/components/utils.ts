import isArray from 'lodash/isArray';
import {brandBreakpoints} from '@/components/prop-validators';
import {IBreakpoints} from '@/interfaces/IBreakpoints';

export const isNullOrUndefined = (value: any) =>
  value === null || value === undefined || value === 'null' || value === 'undefined';

export const parseCssSpacingProp = (spacingPropValue: string) => {
  const values = !isNullOrUndefined(spacingPropValue)
    ? spacingPropValue
      .toString()
      .split(' ')
      .map((value) => value)
    : null;

  if (values === null) {
    return {
      top: null,
      right: null,
      bottom: null,
      left: null,
    };
  }

  const result = {
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

export const parseResponsivePropValue = (
  propValues: any | any[],
  interpolate = false,
  filterFunction = (value: any): any => {
    return !isNullOrUndefined(value) ? value : null;
  },
): IBreakpoints => {
  const propAsArray: any[] = isArray(propValues) ? propValues : [propValues];
  const result: IBreakpoints | any = {
    phone: null,
    tabletPortrait: null,
    tabletLandscape: null,
    smallDesktop: null,
    largeDesktop: null,
  };

  if (interpolate && propAsArray.length < brandBreakpoints.length) {
    const lastValue: any = propAsArray[propAsArray.length - 1];
    const diff = brandBreakpoints.length - propAsArray.length;

    for (let i = 0; i < diff; i++) {
      propAsArray.push(lastValue);
    }
  }

  brandBreakpoints.forEach((name, index) => {
    result[name] = filterFunction(propAsArray[index]);
  });

  return result;
};

export const getResponsiveCssClasses = (
  $style: any,
  breakPointValues: IBreakpoints | any,
  classPrefix: string,
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

  if (!$style || !breakPointValues || !classPrefix) {
    return [];
  }

  Object.keys(breakPointValues).forEach((key) => {
    const breakPointValue = breakPointValues[key];
    const breakPointPrefix = map[key];

    if (isNullOrUndefined(breakPointValue) === false) {
      const className = applyValueToClassName
        ? `${classPrefix}${breakPointPrefix}-${breakPointValue}`
        : `${classPrefix}${breakPointPrefix}`;
      const cssClassName = $style[className];

      cssClasses.push(cssClassName);
    }
  });

  return cssClasses;
};
