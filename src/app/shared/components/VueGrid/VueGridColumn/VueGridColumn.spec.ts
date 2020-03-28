import { render } from '@testing-library/vue';
import VueGridColumns from './VueGridColumn.vue';

describe('VueGridColumn.vue', () => {
  const provide = {
    rowSpace: 'sm',
    rowWithVerticalSpace: true,
    rowTextAlign: 'center',
  };

  test('renders gridColumn with slot', () => {
    const { getByText } = render<any>(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
    });

    getByText('this is the slot');
  });

  test('renders gridColumn with custom width', () => {
    const { getByText } = render<any>(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
      propsData: {
        width: 50,
      },
    });

    const actual = getByText('this is the slot').style.flexBasis;
    const expected = '50%';

    expect(actual).toBe(expected);
  });

  test('renders gridColumn with injected text-align', () => {
    const { getByText } = render<any>(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
    });

    const actual = getByText('this is the slot').style.textAlign;
    const expected = 'center';

    expect(actual).toBe(expected);
  });

  test('renders gridColumn with custom text-align', () => {
    const { getByText } = render<any>(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
      propsData: {
        textAlign: 'right',
      },
    });

    const actual = getByText('this is the slot').style.textAlign;
    const expected = 'right';

    expect(actual).toBe(expected);
  });
});
