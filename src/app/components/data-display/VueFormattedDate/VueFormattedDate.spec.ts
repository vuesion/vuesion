import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import VueFormattedDate from './VueFormattedDate.vue';
import { Default, CustomLocale } from './VueFormattedDate.stories';

describe('VueFormattedDate.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueFormattedDate, {
      props: { ...Default.args },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('03/09/2025, 11:25 AM');
  });

  test('renders component with custom locale', async () => {
    const { getByText, rerender } = harness;

    await rerender({ ...CustomLocale.args });

    getByText('09.03.2025, 11:25');
  });
});
