import { render, RenderResult } from '@testing-library/vue';
import LearnMore from './LearnMore.vue';

describe('LearnMore.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(LearnMore, {
      stubs: ['nuxt-link'],
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Authentication.');
  });
});
