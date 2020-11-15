export const brandVariations = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'];
export const textVariations = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'primary-text',
  'secondary-text',
  'tertiary-text',
];
export const brandSpacings = ['none', 'sm', 'md', 'lg'];

export const variationValidator = (value: string) => {
  return brandVariations.includes(value.toLowerCase());
};

export const textVariationValidator = (value: string) => {
  return textVariations.includes(value.toLowerCase());
};

export const spacingValidator = (value: string) => {
  return brandSpacings.includes(value.toLowerCase());
};
