import { render } from '@testing-library/vue';
import { brandColorVariations } from '../../prop-validators';
import VueBadge from './VueBadge.vue';

describe('VueBadge.vue', () => {
  test('renders component', () => {
    const { getByText } = render(VueBadge, {
      slots: {
        default: 'VueBadge',
      },
    });

    getByText('VueBadge');
  });

  test('renders color variations', () => {
    brandColorVariations.forEach((variation: string) => {
      const { container } = render(VueBadge, {
        propsData: {
          color: variation,
        },
      });
      const actual = container.querySelectorAll(`.${variation}`);
      const expected = 1;

      expect(actual).toHaveLength(expected);
    });
  });

  test('renders outlined', () => {
    const { container } = render(VueBadge, {
      propsData: {
        outlined: true,
      },
    });
    const actual = container.querySelectorAll(`.outlined`);
    const expected = 1;

    expect(actual).toHaveLength(expected);
  });
});
