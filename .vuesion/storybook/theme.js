import theme from './_theme.scss';

const brand = {
  borderColor: theme.highlightColor,
  backgroundColor: theme.highlightColor,
  borderRadius: theme.mainBorderRadius,
};

export default {
  ...theme,
  brand: {
    color: theme.mainTextColor,
    a: {
      ...brand,
    },
    button: {
      ...brand,
    },
  },
};
