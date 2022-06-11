import { describe, beforeEach, test } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import VueContentBlock from './VueContentBlock.vue';

describe('VueContentBlock.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueContentBlock, {
      slots: {
        default: 'slot',
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('slot');
  });
});
