import { render, RenderResult } from '@testing-library/vue';
import VueMasonry from './VueMasonry.vue';

describe('VueMasonry.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueMasonry, {
      stubs: ['nuxt-link'],
      slots: {
        default: '<div>VueMasonry</div>',
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('VueMasonry');
  });
});
