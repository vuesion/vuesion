import { render, RenderResult } from '@testing-library/vue';
import VueColumn from './VueColumn.vue';

describe('VueColumn.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueColumn, {
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

  test('renders component with responsive width', async () => {
    const { html, updateProps } = harness;

    await updateProps({ width: ['100%', '25%', '250px'] });

    expect(html()).toMatch(
      'style="--phone: 100%; --tablet-portrait: 25%; --tablet-landscape: 250px; --small-desktop: 250px; --large-desktop: 250px;"',
    );
  });

  test('renders component with responsive alignment', async () => {
    const { html, updateProps } = harness;

    await updateProps({ align: ['left', 'center', 'right'] });

    expect(html()).toMatch('alignh-left alignh-tp-center alignh-tl-right');
  });

  test('renders component with responsive vertical alignment', async () => {
    const { html, updateProps } = harness;

    await updateProps({ alignY: ['top', 'center', 'bottom'] });

    expect(html()).toMatch('alignv-top alignv-tp-center alignv-tl-bottom');
  });
});
