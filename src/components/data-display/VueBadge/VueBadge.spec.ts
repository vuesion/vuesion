import { describe, beforeEach, test, expect } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
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
});
