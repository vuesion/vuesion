/* istanbul ignore file */
import { render, RenderResult } from '@testing-library/vue';
import Apollo from './apollo.vue';

// TODO: find out how to transpile apollo-composables in jest
xdescribe('Apollo.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(Apollo, {
      stubs: ['nuxt-link'],
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Apollo Example');
  });
});
