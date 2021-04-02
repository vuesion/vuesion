import { render, RenderResult } from '@testing-library/vue';
import VueStack from './VueStack.vue';

describe('VueStack.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueStack, {
      stubs: ['nuxt-link'],
      slots: {
        default: ['<div>slot 1</div>', '<div>slot 2</div>'],
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('slot 1');
    getByText('slot 2');
  });

  test('renders component with responsive spacings', async () => {
    const { html, updateProps } = harness;

    await updateProps({ space: [8, 16, 24, 32, 64] });

    expect(html()).toMatch('pt-8 pt-tp-16 pt-tl-24 pt-sd-32 pt-ld-64');
  });

  test('renders component with responsive alignment', async () => {
    const { html, updateProps } = harness;

    await updateProps({ align: ['left', 'center', 'right'] });

    expect(html()).toMatch('align-left align-tp-center align-tl-right');
  });
});
