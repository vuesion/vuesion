import { render } from '@testing-library/vue';
import { textVariations } from '@/components/prop-validators';
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
    textVariations.forEach((variation: string) => {
      const { container } = render(VueText, {
        propsData: {
          color: variation,
        },
      });
      const actual = container.querySelectorAll(`.${variation}`);
      const expected = 1;

      expect(actual).toHaveLength(expected);
    });
  });
});
