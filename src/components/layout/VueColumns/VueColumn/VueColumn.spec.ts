import { describe, beforeEach, test, expect } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import VueColumn from './VueColumn.vue';

describe('VueColumns.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueColumn, {
      slots: {
        default: 'content',
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('content');
  });

  test('renders component with responsive width', async () => {
    const { html, rerender } = harness;

    await rerender({ width: ['full', '3/12', 'fit'] });

    expect(html()).toMatch('w-full w-tp-3/12 w-tl-fit');
  });

  test('renders component with responsive alignment', async () => {
    const { html, rerender } = harness;

    await rerender({ alignX: ['left', 'center', 'right'] });

    expect(html()).toMatch('justify-left justify-tp-center justify-tl-right');
  });

  test('renders component with responsive vertical alignment', async () => {
    const { html, rerender } = harness;

    await rerender({ alignY: ['top', 'center', 'bottom'] });

    expect(html()).toMatch('items-top items-tp-center items-tl-bottom');
  });

  test('renders component with flex-grow/shrink 0', async () => {
    const { html, rerender } = harness;

    await rerender({ canGrow: false, canShrink: false });

    expect(html()).toMatch('grow-0 shrink-0');
  });
});
