import { render } from '@testing-library/vue';
import { textColorVariations } from '@/components/prop-validators';
import VueText from './VueText.vue';

describe('VueText.vue', () => {
  test('renders component', () => {
    const { getByText } = render(VueText, {
      slots: {
        default: 'VueText',
      },
    });

    getByText('VueText');
  });

  test('renders color variations', () => {
    textColorVariations.forEach((variation: string) => {
      const { container } = render(VueText, {
        props: {
          color: variation,
        },
      });
      const actual = container.querySelectorAll(`.${variation}`);
      const expected = 1;

      expect(actual).toHaveLength(expected);
    });
  });

  test('renders responsive alignment', () => {
    const { html } = render(VueText, {
      slots: {
        default: 'VueText',
      },
      props: {
        align: ['left', 'center', 'right'],
      },
    });
    const actual = html();
    const expected = 'block align-left align-tp-center align-tl-right';

    expect(actual).toMatch(expected);
  });
});
