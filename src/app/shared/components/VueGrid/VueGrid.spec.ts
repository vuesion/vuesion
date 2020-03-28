import { render } from '@testing-library/vue';
import VueGrid from './VueGrid.vue';

describe('VueGrid.vue', () => {
  test('renders component', async () => {
    const { getByText } = render<any>(VueGrid, { slots: { default: 'this is the slot' } });

    getByText('this is the slot');
  });

  test('renders component with 100% width', () => {
    const { container } = render<any>(VueGrid, {
      slots: { default: 'this is the slot' },
      propsData: {
        fill: true,
      },
    });

    const actual = container.querySelectorAll('.fill');
    const expected = 1;

    expect(actual).toHaveLength(expected);
  });

  test('renders component with text align center', () => {
    const { getByText } = render<any>(VueGrid, {
      slots: { default: 'this is the slot' },
      propsData: {
        textAlign: 'center',
      },
    });

    const actual = getByText('this is the slot').style.textAlign;
    const expected = 'center';

    expect(actual).toBe(expected);
  });
});
