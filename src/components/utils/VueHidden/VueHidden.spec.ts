import { describe, beforeEach, test, expect } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import VueHidden from './VueHidden.vue';

describe('VueHidden.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueHidden, {
      slots: {
        default: 'content',
      },
      props: {
        phone: true,
        tabletPortrait: true,
        tabletLandscape: true,
        smallDesktop: true,
        largeDesktop: true,
        onScreen: true,
      },
    });
  });

  test('renders component', () => {
    const { html } = harness;

    expect(html()).toMatch('hidePhone');
    expect(html()).toMatch('hideTabletPortrait');
    expect(html()).toMatch('hideTabletLandscape');
    expect(html()).toMatch('hideSmallDesktop');
    expect(html()).toMatch('hideLargeDesktop');
    expect(html()).toMatch('onScreen');
  });
});
