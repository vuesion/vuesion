import isArray from 'lodash/isArray';
import { BreakPoint } from '@/enums/BreakPoint';

export const brandColorVariations = ['primary', 'neutral', 'danger', 'warning', 'success', 'info'];
export const textColorVariations = [
  'primary',
  'neutral',
  'danger',
  'warning',
  'success',
  'info',
  'high-emphasis',
  'medium-emphasis',
  'low-emphasis',
  'high-emphasis-inverse',
  'medium-emphasis-inverse',
  'low-emphasis-inverse',
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
  'small-title',
  'default',
  'label',
  'button',
  'support',
];
export const fontWeights = ['regular', 'semi-bold'];
export const brandSpacings = [
  '0',
  '2',
  '4',
  '8',
  '12',
  '16',
  '20',
  '24',
  '32',
  '40',
  '48',
  '52',
  '56',
  '64',
  '72',
  '84',
  '96',
  '120',
  '128',
  '192',
];
export const brandBreakpoints = Object.keys(BreakPoint);

export const colorVariationValidator = (value: string) => {
  return brandColorVariations.includes(value.toLowerCase());
};

export const textColorVariationValidator = (value: string) => {
  return textColorVariations.includes(value.toLowerCase());
};

export const textStyleValidator = (value: string) => {
  return textStyles.includes(value.toLowerCase());
};

export const fontWeightValidator = (value: string) => {
  return fontWeights.includes(value.toLowerCase());
};

export const alignmentValidator = (value: string) => {
  return ['left', 'center', 'right', 'top', 'bottom', 'inherit', 'initial'].includes(value.toLowerCase());
};

export const responsiveAlignmentValidator = (alignmentProps: string | string[]) => {
  if (isArray(alignmentProps)) {
    let valid = true;

    alignmentProps.forEach((spacingProp) => {
      if (valid === true && alignmentValidator(spacingProp) === false) {
        valid = false;
      }
    });

    return valid;
  } else {
    return alignmentValidator(alignmentProps);
  }
};

export const breakpointValidator = (value: string) => {
  return brandBreakpoints.includes(value);
};

export const spacingValidator = (spacingProp: string | number) => {
  let valid = true;

  spacingProp
    .toString()
    .split(' ')
    .forEach((value) => {
      if (valid === true && brandSpacings.includes(value.toLowerCase()) === false) {
        valid = false;
      }
    });

  return valid;
};

export const responsiveSpacingValidator = (spacingProps: string | string[]) => {
  if (isArray(spacingProps)) {
    let valid = true;

    spacingProps.forEach((spacingProp) => {
      if (valid === true && spacingValidator(spacingProp) === false) {
        valid = false;
      }
    });

    return valid;
  } else {
    return spacingValidator(spacingProps);
  }
};
