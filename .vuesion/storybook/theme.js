import { create } from '@storybook/theming';
import theme from './_theme.scss';

const brand = {
  borderColor: theme.highlightColor,
  backgroundColor: theme.highlightColor,
  borderRadius: theme.mainBorderRadius,
};

export default create({
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
});
