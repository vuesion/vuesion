import { describe, beforeEach, test } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import KeyFeaturesSection from './KeyFeaturesSection.vue';

describe('KeyFeaturesSection.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(KeyFeaturesSection, {});
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('KeyFeaturesSection.Feature1.title');
    getByText('KeyFeaturesSection.Feature1.description');

    getByText('KeyFeaturesSection.Feature2.title');
    getByText('KeyFeaturesSection.Feature2.description');

    getByText('KeyFeaturesSection.Feature3.title');
    getByText('KeyFeaturesSection.Feature3.description');

    getByText('KeyFeaturesSection.Feature4.title');
    getByText('KeyFeaturesSection.Feature4.description');

    getByText('KeyFeaturesSection.Feature5.title');
    getByText('KeyFeaturesSection.Feature5.description');

    getByText('KeyFeaturesSection.Feature6.title');
    getByText('KeyFeaturesSection.Feature6.description');

    getByText('KeyFeaturesSection.Feature7.title');
    getByText('KeyFeaturesSection.Feature7.description');

    getByText('KeyFeaturesSection.Feature8.title');
    getByText('KeyFeaturesSection.Feature8.description');

    getByText('KeyFeaturesSection.services.title');
    getByText('KeyFeaturesSection.services.description');

    getByText('KeyFeaturesSection.cta.AllFeatures');
  });
});
