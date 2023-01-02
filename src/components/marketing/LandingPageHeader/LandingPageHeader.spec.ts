import { describe, beforeEach, test, vi } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import LandingPageHeader from './LandingPageHeader.vue';

describe('LandingPageHeader.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    (global as any).HTMLCanvasElement.prototype.getContext = vi.fn();
    (global as any).HTMLCanvasElement.prototype.getClientRects = () => {
      return {
        items: () => ({
          width: 500,
          height: 1440,
        }),
      };
    };

    harness = render(LandingPageHeader, {
      global: {
        stubs: ['nuxt-link'],
        // TODO: find a way to mock it globally
        mocks: { localePath: (p: string) => p },
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Create Vuesion project');
    getByText('Preview in Figma');
  });
});
