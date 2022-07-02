import { describe, beforeEach, test, expect } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import VueBreadcrumb from './VueBreadcrumb.vue';

describe('VueBreadcrumb.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueBreadcrumb, {
      props: {
        items: [
          { label: 'Level 1', value: '/level-1' },
          { label: 'Level 2', value: '/level-2' },
        ],
      },
      global: {
        stubs: ['nuxt-link'],
      },
    });
  });

  test('renders component', async () => {
    const { html, rerender } = harness;

    await rerender({
      items: [
        { label: 'Level 1', value: '/level-1' },
        { label: 'Level 2', value: '/level-2' },
        { label: 'Level 3', value: '/level-3' },
        { label: 'Level 4', value: '/level-4' },
        { label: 'Level 5', value: '/level-5' },
      ],
    });

    const markup = html();

    expect(markup).toMatch('/level-1');
    expect(markup).toMatch('/level-2');
    expect(markup).toMatch('/level-3');
    expect(markup).toMatch('/level-4');
    expect(markup).toMatch('/level-5');
  });
});
