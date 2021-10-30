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

    expect(html()).toMatch('style="--wp: 100%; --wtp: 25%; --wtl: 250px; --wsd: 250px; --wld: 250px;"');
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
