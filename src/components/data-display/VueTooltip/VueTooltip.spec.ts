import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, RenderResult } from '@testing-library/vue';
import VueTooltip from './VueTooltip.vue';

describe('VueTooltip.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueTooltip, {
      props: {
        tip: 'foo',
      },
      slots: {
        default: 'test',
      },
    });
  });

  test('renders tooltip on the top', () => {
    const { getByText, html } = harness;
    const tooltip = getByText('test');

    expect(tooltip.textContent).toBe('test');
    expect(html()).toMatch('top');
  });

  test('renders component on the bottom', async () => {
    const { getByText, rerender, html } = harness;

    await rerender({ direction: 'bottom' });

    const tooltip = getByText('test');

    expect(tooltip.textContent).toBe('test');
    expect(html()).toMatch('bottom');
  });

  test('should show and hide tooltip', async () => {
    const { getByText, html } = harness;
    const tooltip = getByText('test');

    expect(html()).not.toMatch('show');

    await fireEvent.mouseEnter(tooltip);

    expect(html()).toMatch('show');

    await fireEvent.mouseLeave(tooltip);

    expect(html()).not.toMatch('show');

    /**
     * touch
     */

    await fireEvent.touchEnd(tooltip);

    expect(html()).toMatch('show');

    await fireEvent.touchEnd(tooltip);

    expect(html()).not.toMatch('show');
  });

  test('should not show the tooltip', async () => {
    const { getByText, rerender, html } = harness;

    await rerender({ disabled: true });

    const tooltip = getByText('test');

    expect(html()).not.toMatch('show');

    await fireEvent.mouseEnter(tooltip);

    expect(html()).not.toMatch('show');

    /**
     * touch
     */

    await fireEvent.touchEnd(tooltip);
    expect(html()).not.toMatch('show');
  });
});
