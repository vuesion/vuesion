import { render, RenderResult } from '@testing-library/vue';
import VueCard from './VueCard.vue';

describe('VueCard.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueCard, {
      slots: {
        default: 'VueCard',
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('VueCard');
  });
});
