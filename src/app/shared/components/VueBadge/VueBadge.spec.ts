import { render } from '@testing-library/vue';
import VueBadge from './VueBadge.vue';
import { brandVariations } from '@components/utils';

describe('VueBadge.vue', () => {
  test('renders component', () => {
    const { getByText } = render<any>(VueBadge as any, {
      slots: {
        default: 'VueBadge',
      },
    });

    getByText('VueBadge');
  });

  test('renders color variations', () => {
    brandVariations.forEach((variation: string) => {
      const { container } = render<any>(VueBadge as any, {
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
    const { container } = render<any>(VueBadge as any, {
      propsData: {
        outlined: true,
      },
    });
    const actual = container.querySelectorAll(`.outlined`);
    const expected = 1;

    expect(actual).toHaveLength(expected);
  });
});
