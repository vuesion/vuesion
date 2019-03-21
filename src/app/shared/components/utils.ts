export const variationValidator = (value: string) => {
  return ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger'].indexOf(value) !== -1;
};
