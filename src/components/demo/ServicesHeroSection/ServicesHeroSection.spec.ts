import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import ServicesHeroSection from './ServicesHeroSection.vue';

describe('ServicesHeroSection.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(ServicesHeroSection, {});
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('ServicesHeroSection.title');
    getByText('ServicesHeroSection.description');
    getByText('ServicesHeroSection.cta');
  });
});
