import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import LandingPageHeroSection from './LandingPageHeroSection.vue';

describe('LandingPageHeroSection.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(LandingPageHeroSection, {});
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('LandingPageHeroSection.headline');
    getByText('LandingPageHeroSection.subheadline');
    getByText('LandingPageHeroSection.cta.GetStarted');
    getByText('LandingPageHeroSection.cta.Figma');
    getByText('LandingPageHeroSection.cta.VuesionServices');
  });
});
