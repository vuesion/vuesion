import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VueBadge from './VueBadge.vue';
import { BadgeStatusValues } from '~/components/prop-types';

describe('VueBadge.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueBadge, {
      slots: {
        default: 'VueBadge',
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('VueBadge');
  });

  test('renders badge statuses', async () => {
    for (let i = 0; i < BadgeStatusValues.length; i++) {
      const status = BadgeStatusValues[i];

      const { html, rerender } = harness;

      await rerender({ status });

      expect(html()).toMatch(status);
    }
  });

  test('emits @click event', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.click(getByText('VueBadge'));

    expect(emitted().click).toBeTruthy();
  });
});
