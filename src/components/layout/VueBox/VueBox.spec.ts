import { render, RenderResult } from '@testing-library/vue';
import VueBox from './VueBox.vue';

describe('VueBox.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueBox, {
      stubs: ['nuxt-link'],
      slots: {
        default: 'content',
      },
    });
  });

  test('renders component with style', async () => {
    const { getByText, updateProps, html } = harness;

    await updateProps({ styles: { height: '100px' } });

    getByText('content');

    expect(html()).toMatch('style="height: 100px;"');
  });

  test('renders component with single padding and margin', async () => {
    const { html, updateProps } = harness;

    await updateProps({ padding: 8, margin: 8 });

    expect(html()).toMatch('pt-8 pr-8 pb-8 pl-8 mt-8 mr-8 mb-8 ml-8');
  });

  test('renders component with responsive paddings', async () => {
    const { html, updateProps } = harness;

    await updateProps({ padding: [8, 16, 24, 32, 64] });

    expect(html()).toMatch(
      'pt-8 pr-8 pb-8 pl-8 pt-tp-16 pr-tp-16 pb-tp-16 pl-tp-16 pt-tl-24 pr-tl-24 pb-tl-24 pl-tl-24 pt-sd-32 pr-sd-32 pb-sd-32 pl-sd-32 pt-ld-64 pr-ld-64 pb-ld-64 pl-ld-64',
    );
  });
});
