import { describe, beforeEach, test, expect } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import VueStack from './VueStack.vue';

describe('VueStack.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueStack, {
      slots: {
        default: ['<div>slot 1</div>', '<div>slot 2</div>'],
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('slot 1');
    getByText('slot 2');
  });

  test('renders component with responsive spacings', async () => {
    const { html, rerender } = harness;

    await rerender({ space: [8, 16, 24, 32, 64] });

    expect(html()).toMatch('s-8');
    expect(html()).toMatch('s-tp-16');
    expect(html()).toMatch('s-tl-24');
    expect(html()).toMatch('s-sd-32');
    expect(html()).toMatch('s-ld-64');
  });

  test('renders component with responsive alignment', async () => {
    const { html, rerender } = harness;

    await rerender({ alignX: ['start', 'center', 'end'] });

    expect(html()).toMatch('alignx-start');
    expect(html()).toMatch('alignx-tp-center');
    expect(html()).toMatch('alignx-tl-end');
  });
});
