import { describe, beforeEach, test, expect } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import VueTiles from './VueTiles.vue';

describe('VueTiles.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueTiles, {
      slots: {
        default: 'content',
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('content');
  });

  test('renders component with responsive spacings', async () => {
    const { html, rerender } = harness;

    await rerender({ space: [8, 16, 24, 32, 64] });

    expect(html()).toMatch(
      'gap-y-8 gap-y-tp-16 gap-y-tl-24 gap-y-sd-32 gap-y-ld-64 gap-x-8 gap-x-tp-16 gap-x-tl-24 gap-x-sd-32 gap-x-ld-64',
    );
  });

  test('renders component with responsive columns', async () => {
    const { html, rerender } = harness;

    await rerender({ columns: [1, 2, 4] });

    expect(html()).toMatch('grid-cols-1 grid-cols-tp-2 grid-cols-tl-4');
  });
});
