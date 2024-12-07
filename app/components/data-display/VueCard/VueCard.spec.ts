import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import VueCard from './VueCard.vue';

describe('VueCard.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueCard, {
      props: {
        padding: '4',
      },
      slots: {
        default: 'VueCard',
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('VueCard');
  });
});
