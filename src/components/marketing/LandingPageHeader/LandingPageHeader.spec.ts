import { render, RenderResult } from '@testing-library/vue';
import LandingPageHeader from './LandingPageHeader.vue';

describe('LandingPageHeader.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(LandingPageHeader, {
      stubs: ['nuxt-link'],
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Clone from Github');
    getByText('Preview in Figma');
  });
});
