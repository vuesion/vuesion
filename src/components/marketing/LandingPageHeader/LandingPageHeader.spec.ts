import { render, RenderResult } from '@testing-library/vue';
import LandingPageHeader from './LandingPageHeader.vue';

describe('LandingPageHeader.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    (global as any).HTMLCanvasElement.prototype.getContext = jest.fn();

    harness = render(LandingPageHeader, {
      stubs: ['nuxt-link'],
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Create Vuesion project');
    getByText('Preview in Figma');
  });
});
