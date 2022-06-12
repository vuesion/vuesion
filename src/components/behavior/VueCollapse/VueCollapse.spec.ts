import { describe, beforeEach, test, expect } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import VueCollapse from './VueCollapse.vue';

describe('VueCollapse.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueCollapse, {
      slots: {
        default: '<h1>content</h1>',
      },
    });
  });

  test('renders component', async () => {
    const { queryAllByText, rerender } = harness;

    expect(queryAllByText('content')).toHaveLength(1);

    await rerender({ show: false });

    expect(queryAllByText('content')).toHaveLength(0);
  });
});
