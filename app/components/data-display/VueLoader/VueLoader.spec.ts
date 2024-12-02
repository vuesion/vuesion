import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/vue';
import VueLoader from './VueLoader.vue';

describe('VueLoader.vue', () => {
  test('renders default loader', () => {
    const { html } = render(VueLoader);

    expect(html()).toMatch('vueLoader');
    expect(html()).toMatch('svg');
    expect(html()).toMatch('circle');
  });
});
