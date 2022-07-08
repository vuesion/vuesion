import { describe, beforeEach, test } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import FeatureList from './FeatureList.vue';

describe('FeatureList.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(FeatureList);
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('Features');
    getByText('Nuxt.js Boilerplate');
    getByText('Testing');
    getByText('Design System');
    getByText('Storybook & Figma');
    getByText('Marketing & i18n');
    getByText('Authentication');
    getByText('DX & Code quality');
    getByText('Axios & GraphQL');
    getByText('Progressive Web App');
  });
});
