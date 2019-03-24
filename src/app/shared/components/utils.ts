export const variationValidator = (value: string) => {
  return ['primary', 'secondary', 'success', 'warning', 'danger'].indexOf(value) !== -1;
};
