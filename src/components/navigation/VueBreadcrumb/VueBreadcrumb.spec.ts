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

    expect(markup).toMatch('Level 1');
    expect(markup).toMatch('Level 2');
    expect(markup).toMatch('Level 3');
    expect(markup).toMatch('Level 4');
    expect(markup).toMatch('Level 5');
  });
});
