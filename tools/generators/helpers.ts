export const hyphenate = (text: string) => {
  return text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
};
