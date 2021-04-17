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

export const spacingValidator = (value: string) => {
  return brandSpacings.includes(value.toLowerCase());
};
