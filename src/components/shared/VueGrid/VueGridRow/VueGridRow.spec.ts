import { render } from '@testing-library/vue';
import VueGridRow from './VueGridRow.vue';

describe('VueGridRow.vue', () => {
  const provide = {
    gridSpace: 'sm',
    gridWithVerticalSpace: false,
    gridTextAlign: 'right',
  };

  test('renders component', () => {
    const { getByText } = render<any>(VueGridRow, {
      slots: { default: 'this is the slot' },
      provide,
    });

    getByText('this is the slot');
  });

  test('should use provided value', () => {
    const { getByText } = render<any>(VueGridRow, {
      slots: { default: 'this is the slot' },
      provide,
    });

    const actual = getByText('this is the slot').style.textAlign;
    const expected = 'right';

    expect(actual).toBe(expected);
  });

  test('should use alignItems prop', () => {
    const { getByText } = render<any>(VueGridRow, {
      slots: { default: 'this is the slot' },
      provide,
      propsData: {
        alignItems: 'baseline',
      },
    });

    const actual = getByText('this is the slot').style.alignItems;
    const expected = 'baseline';

    expect(actual).toBe(expected);
  });
});
