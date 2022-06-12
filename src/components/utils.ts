import { IBreakpoints } from '@/interfaces/IBreakpoints';
import { BreakpointValues } from '@/components/prop-types';

export interface CssSpacing {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

export const isNullOrUndefined = (value: any) =>
  value === null || value === undefined || value === 'null' || value === 'undefined';

export const parseCssSpacingProp = (spacingPropValue: string): CssSpacing => {
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

  if (!breakPointValues || !classPrefix) {
    return [];
  }

  Object.keys(breakPointValues).forEach((key) => {
    const breakPointValue = breakPointValues[key];
    const breakPointPrefix = map[key];

    if (isNullOrUndefined(breakPointValue) === false) {
      const className = applyValueToClassName
        ? `${classPrefix}${breakPointPrefix}-${breakPointValue}`
        : `${classPrefix}${breakPointPrefix}`;
      const cssClassName = $style ? $style[className] : className;

      cssClasses.push(cssClassName);
    }
  });

  return cssClasses;
};

export const getCssSpacingClasses = (
  $style: any,
  values: CssSpacing,
  classNamePrefix: string,
  breakpointPrefix: string = null,
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

    if (isNullOrUndefined(value) === false) {
      classes.push($style ? $style[className] : className);
    }
  });

  return classes;
};

export const getFlexDirectionForBreakpoint = (reverse: boolean, stacked: boolean, breakpoint?: string) => {
  if (reverse === null && stacked === false) {
    return null;
  }

  let direction = 'flex-row';

  if (reverse === true && stacked === false) {
    direction = 'flex-row-reverse';
  } else if (reverse === true && stacked === true) {
    direction = 'flex-col-reverse';
  } else if (stacked === true) {
    direction = 'flex-col';
  }

  return breakpoint ? `${direction}-${breakpoint}` : direction;
};

export const getGUID = (): string => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  return `${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}${s4()}`;
};

export const getIntInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getFloatInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
