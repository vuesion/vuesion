import { render, RenderResult } from '@testing-library/vue';
import VueTiles from './VueTiles.vue';

describe('VueTiles.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueTiles, {
      stubs: ['nuxt-link'],
      slots: {
        default: 'content',
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('content');
  });

  test('renders component with responsive spacings', async () => {
    const { html, updateProps } = harness;

    await updateProps({ space: [8, 16, 24, 32, 64] });

    expect(html()).toMatch(
      'spacev-8 spacev-tp-16 spacev-tl-24 spacev-sd-32 spacev-ld-64 spaceh-8 spaceh-tp-16 spaceh-tl-24 spaceh-sd-32 spaceh-ld-64',
    );
  });

  test('renders component with responsive columns', async () => {
    const { html, updateProps } = harness;

    await updateProps({ columns: [1, 2, 4] });

    expect(html()).toMatch(
      'style="--phone: 1; --tablet-portrait: 2; --tablet-landscape: 4; --small-desktop: 4; --large-desktop: 4;"',
    );
  });
});
