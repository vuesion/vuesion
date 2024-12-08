import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import ExpertiseSection from './ExpertiseSection.vue';

describe('ExpertiseSection.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(ExpertiseSection, {});
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('ExpertiseSection.title');
    getByText('ExpertiseSection.description');
  });
});
