export const brandVariations = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'];
export const brandSpacings = ['none', 'sm', 'md', 'lg'];

export const variationValidator = (value: string) => {
  return brandVariations.indexOf(value.toLowerCase()) !== -1;
};

export const spacingValidator = (value: string) => {
  return brandSpacings.indexOf(value.toLowerCase()) !== -1;
};
