import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VuePopover from './VuePopover.vue';
import { triggerWindow } from '~/test/test-utils';
import { nextTick } from 'vue';

describe('VuePopover.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VuePopover, {
      slots: {
        trigger: 'Trigger via Slot',
        content: 'Content via Slot',
      },
    });
  });

  test('show and hide popover content on click', async () => {
    const { getByText, queryAllByText } = harness;

    await fireEvent.click(getByText('Trigger via Slot'));

    expect(queryAllByText('Content via Slot')).toHaveLength(1);

    await fireEvent.click(getByText('Trigger via Slot'));

    expect(queryAllByText('Content via Slot')).toHaveLength(0);
  });

  test('show and hide popover content on mouseover and mouseleave', async () => {
    const { getByText, queryAllByText } = harness;

    await fireEvent.mouseOver(getByText('Trigger via Slot'));

    expect(queryAllByText('Content via Slot')).toHaveLength(1);

    await fireEvent.mouseLeave(getByText('Trigger via Slot'));

    expect(queryAllByText('Content via Slot')).toHaveLength(0);
  });

  test('should hide content on outside click', async () => {
    const { getByText, queryAllByText } = harness;

    await fireEvent.click(getByText('Trigger via Slot'));

    expect(queryAllByText('Content via Slot')).toHaveLength(1);

    const target = document.createElement('span');
    triggerWindow.click({ target, composedPath: () => [] });

    await nextTick();

    expect(queryAllByText('Content via Slot')).toHaveLength(0);
  });
});
