export const brandVariations = ['default', 'primary', 'secondary', 'success', 'warning', 'danger'];

export const variationValidator = (value: string) => {
  return brandVariations.indexOf(value.toLowerCase()) !== -1;
};
