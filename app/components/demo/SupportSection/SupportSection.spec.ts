import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import SupportSection from './SupportSection.vue';

describe('SupportSection.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(SupportSection, {});
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('SupportSection.title');
    getByText('SupportSection.chanel1.description');
    getByText('SupportSection.chanel1.cta');
    getByText('SupportSection.chanel2.description');
    getByText('SupportSection.chanel2.cta');
    getByText('SupportSection.chanel3.description');
    getByText('SupportSection.chanel3.cta');
    getByText('SupportSection.chanel4.description');
    getByText('SupportSection.chanel4.cta');
  });
});
