import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import WhySection from './WhySection.vue';

describe('WhySection.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(WhySection, {});
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('WhySection.title');
    getByText('WhySection.paragraph1');
    getByText('WhySection.paragraph2');
  });
});
