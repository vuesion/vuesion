import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import BenefitsSection from './BenefitsSection.vue';

describe('BenefitsSection.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(BenefitsSection, {});
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('BenefitsSection.title');
    getByText('BenefitsSection.Benefit1.title');
    getByText('BenefitsSection.Benefit1.description');
    getByText('BenefitsSection.Benefit2.title');
    getByText('BenefitsSection.Benefit2.description');
    getByText('BenefitsSection.Benefit3.title');
    getByText('BenefitsSection.Benefit3.description');
    getByText('BenefitsSection.Benefit4.title');
    getByText('BenefitsSection.Benefit4.description');
    getByText('BenefitsSection.cta');
  });
});
