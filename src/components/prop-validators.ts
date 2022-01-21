import isArray from 'lodash/isArray';
import { BreakPoint } from '@/enums/BreakPoint';

export const brandColorVariations = ['primary', 'neutral', 'danger', 'warning', 'success'];
export const badgeStatuses = ['info', 'warning', 'success', 'danger', 'neutral'];
export const textColorVariations = [
  'info',
  'danger',
  'warning',
  'success',
  'text-high',
  'text-medium',
  'text-low',
  'text-inverse-high',
  'text-inverse-medium',
  'text-inverse-low',
];
export const textStyles = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'description',
  'large-title',
  'medium-title',
  'small-title',
  'default',
  'label',
  'button',
  'support',
];
export const buttonStyles = ['primary', 'secondary', 'outline', 'ghost', 'danger'];
export const shirtSizes = ['sm', 'md', 'lg'];
export const fontWeights = ['regular', 'semi-bold'];
export const brandSpacings = [
  '0',
  '2',
  '4',
  '8',
  '10',
  '12',
  '16',
  '20',
  '24',
  '32',
  '48',
  '64',
  '80',
  '96',
  '144',
  '192',
];
export const brandBreakpoints = Object.keys(BreakPoint);

export const colorVariationValidator = (value: string) => {
  return brandColorVariations.includes(value.toLowerCase());
};

export const badgeStatusesValidator = (value: string) => {
  return badgeStatuses.includes(value.toLowerCase());
};

export const textColorVariationValidator = (value: string) => {
  return textColorVariations.includes(value.toLowerCase());
};

export const textStyleValidator = (value: string) => {
  return textStyles.includes(value.toLowerCase());
};

export const buttonStyleValidator = (value: string) => {
  return buttonStyles.includes(value.toLowerCase());
};

export const shirtSizeValidator = (value: string) => {
  return shirtSizes.includes(value.toLowerCase());
};

export const fontWeightValidator = (value: string) => {
  return fontWeights.includes(value.toLowerCase());
};

export const horizontalAlignmentValidator = (value: string) => {
  return ['left', 'center', 'right', 'inherit', 'initial'].includes(value.toLowerCase());
};

export const verticalAlignmentValidator = (value: string) => {
  return ['center', 'top', 'bottom', 'inherit', 'initial'].includes(value.toLowerCase());
};

export const directionValidator = (value: string) => {
  return ['top', 'bottom'].includes(value.toLowerCase());
};

export const breakpointValidator = (value: string) => {
  return brandBreakpoints.includes(value);
};

export const spacingValidator = (spacingProp: string | number) => {
  let valid = true;

  spacingProp
    ?.toString()
    .split(' ')
    .forEach((value) => {
      if (valid === true && value.toLowerCase() !== 'null' && brandSpacings.includes(value.toLowerCase()) === false) {
        valid = false;
      }
    });

  return valid;
};

export const responsivePropValidator = (validator: (value: any) => boolean) => {
  return (prop: any | any[]) => {
    if (isArray(prop)) {
      let valid = true;

      prop.forEach((p) => {
        if (valid === true && validator(p) === false) {
          valid = false;
        }
      });

      return valid;
    } else {
      return validator(prop);
    }
  };
};
