import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import ServicesSection from './ServicesSection.vue';

describe('ServicesSection.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(ServicesSection, {});
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('ServicesSection.title');
    getByText('ServicesSection.Benefit1.title');
    getByText('ServicesSection.Benefit1.description');
    getByText('ServicesSection.Benefit2.title');
    getByText('ServicesSection.Benefit2.description');
    getByText('ServicesSection.Benefit3.title');
    getByText('ServicesSection.Benefit3.description');
    getByText('ServicesSection.Benefit4.title');
    getByText('ServicesSection.Benefit4.description');
    getByText('ServicesSection.Benefit5.title');
    getByText('ServicesSection.Benefit5.description');
    getByText('ServicesSection.Benefit6.title');
    getByText('ServicesSection.Benefit6.description');
    getByText('ServicesSection.Benefit7.title');
    getByText('ServicesSection.Benefit7.description');
  });
});
