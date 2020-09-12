import { render } from '@testing-library/vue';
import VueGridColumns from './VueGridColumn.vue';

describe('VueGridColumn.vue', () => {
  const provide: any = {
    rowVerticalSpace: 'sm',
    rowHorizontalSpace: 'sm',
    rowTextAlign: 'center',
    rowJustifyContent: null,
  };

  test('renders gridColumn with slot', () => {
    const { getByText } = render(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
    });

    getByText('this is the slot');
  });

  test('renders gridColumn with custom width', () => {
    const { getByText } = render(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
      propsData: {
        width: '50%',
      },
    });

    const actual = getByText('this is the slot').style.getPropertyValue('--phone');
    const expected = '50%';

    expect(actual).toBe(expected);
  });

  test('renders gridColumn with custom width for small Desktop', () => {
    const { getByText } = render(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
      propsData: {
        smallDesktop: '50%',
      },
    });

    const actual = getByText('this is the slot').style.getPropertyValue('--small-desktop');
    const expected = '50%';

    expect(actual).toBe(expected);
  });

  test('renders gridColumn with custom width and other viewports should inherit this value', () => {
    const { getByText } = render(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
      propsData: {
        width: '100%',
        smallDesktop: '50%',
      },
    });

    let actual = getByText('this is the slot').style.getPropertyValue('--tablet-landscape');
    let expected = '100%';

    expect(actual).toBe(expected);

    actual = getByText('this is the slot').style.getPropertyValue('--large-desktop');
    expected = '50%';

    expect(actual).toBe(expected);
  });

  test('renders gridColumn with injected text-align', () => {
    const { getByText } = render(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
    });

    const actual = getByText('this is the slot').style.textAlign;
    const expected = 'center';

    expect(actual).toBe(expected);
  });

  test('renders gridColumn with custom text-align', () => {
    const { getByText } = render(VueGridColumns, {
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

  test('renders gridColumn that can grow and shrink', () => {
    const { getByText } = render(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
      propsData: {
        canGrow: true,
      },
    });

    const actual = getByText('this is the slot').style.flex;
    const expected = '1 1';

    expect(actual).toBe(expected);
  });

  test('renders gridColumn that can not grow', () => {
    const { getByText } = render(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
      propsData: {
        canGrow: false,
      },
    });

    const actual = getByText('this is the slot').style.flex;
    const expected = '0 1';

    expect(actual).toBe(expected);
  });

  test('renders gridColumn that can not shrink', () => {
    const { getByText } = render(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
      propsData: {
        canShrink: false,
      },
    });

    const actual = getByText('this is the slot').style.flex;
    const expected = '1 0';

    expect(actual).toBe(expected);
  });

  test('renders gridColumn that has a flex display if alignSelf is set', () => {
    const { getByText } = render(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
      propsData: {
        alignSelf: 'stretch',
      },
    });

    const actual = getByText('this is the slot').style.display;
    const expected = 'flex';

    expect(actual).toBe(expected);
  });

  test('renders gridColumn that has a flex display if justifyContent is set', () => {
    const { getByText } = render(VueGridColumns, {
      slots: { default: 'this is the slot' },
      provide,
      propsData: {
        justifyContent: 'center',
      },
    });

    const actual = getByText('this is the slot').style.display;
    const expected = 'flex';

    expect(actual).toBe(expected);
  });
});
