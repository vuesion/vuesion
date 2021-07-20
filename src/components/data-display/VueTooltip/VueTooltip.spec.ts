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
    const { getByText } = harness;
    const tooltip = getByText('test');

    expect(tooltip.textContent).toBe('test');
    expect(tooltip.classList.contains('vueTooltip')).toBeTruthy();
    expect(tooltip.classList.contains('highlight')).toBeTruthy();
    expect(tooltip.classList.contains('top')).toBeTruthy();
  });

  test('renders component on the bottom', async () => {
    const { getByText, updateProps } = harness;

    await updateProps({ direction: 'bottom' });

    const tooltip = getByText('test');

    expect(tooltip.textContent).toBe('test');
    expect(tooltip.classList.contains('vueTooltip')).toBeTruthy();
    expect(tooltip.classList.contains('highlight')).toBeTruthy();
    expect(tooltip.classList.contains('bottom')).toBeTruthy();
  });

  test('should show and hide tooltip', async () => {
    const { getByText } = harness;
    const tooltip = getByText('test');

    expect(tooltip.classList.contains('show')).toBeFalsy();

    await fireEvent.mouseEnter(tooltip);

    expect(tooltip.classList.contains('show')).toBeTruthy();

    await fireEvent.mouseLeave(tooltip);

    expect(tooltip.classList.contains('show')).toBeFalsy();

    /**
     * touch
     */

    await fireEvent.touchEnd(tooltip);

    expect(tooltip.classList.contains('show')).toBeTruthy();

    await fireEvent.touchEnd(tooltip);

    expect(tooltip.classList.contains('show')).toBeFalsy();
  });

  test('should not show the tooltip', async () => {
    const { getByText, updateProps } = harness;

    await updateProps({ disabled: true });

    const tooltip = getByText('test');

    expect(tooltip.classList.contains('show')).toBeFalsy();

    await fireEvent.mouseEnter(tooltip);

    expect(tooltip.classList.contains('show')).toBeFalsy();

    /**
     * touch
     */

    await fireEvent.touchEnd(tooltip);
    expect(tooltip.classList.contains('show')).toBeFalsy();
  });
});
