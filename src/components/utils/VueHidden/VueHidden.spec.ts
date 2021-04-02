import { render, RenderResult } from '@testing-library/vue';
import VueHidden from './VueHidden.vue';

describe('VueHidden.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueHidden, {
      stubs: ['nuxt-link'],
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

    expect(html()).toMatch(
      'hidePhone hideTabletPortrait hideTabletLandscape hideSmallDesktop hideLargeDesktop onScreen',
    );
  });
});
