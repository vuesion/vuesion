import { render, RenderResult } from '@testing-library/vue';
import VueInline from './VueInline.vue';

describe('VueInline.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueInline, {
      stubs: ['nuxt-link'],
      slots: {
        default: '<div>content</div>',
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

    expect(html()).toMatch('space-8 space-tp-16 space-tl-24 space-sd-32 space-ld-64');
  });

  test('renders component with responsive alignments', async () => {
    const { html, updateProps } = harness;

    await updateProps({ align: ['left', 'center', 'right'] });

    expect(html()).toMatch('align-left align-tp-center align-tl-right');
  });

  test('renders component with stacked elements below tabletPortrait', async () => {
    const { html, updateProps } = harness;

    await updateProps({ stackPhone: true });

    expect(html()).toMatch('stack');
  });

  test('renders component with stacked elements below tabletLandscape', async () => {
    const { html, updateProps } = harness;

    await updateProps({ stackPhone: true, stackTabletPortrait: true });

    expect(html()).toMatch('stack stack-tp');
  });

  test('renders component with stacked elements below smallDesktop', async () => {
    const { html, updateProps } = harness;

    await updateProps({ stackPhone: true, stackTabletPortrait: true, stackTabletLandscape: true });

    expect(html()).toMatch('stack stack-tp stack-tl');
  });

  test('renders component with stacked elements below largeDesktop', async () => {
    const { html, updateProps } = harness;

    await updateProps({
      stackPhone: true,
      stackTabletPortrait: true,
      stackTabletLandscape: true,
      stackSmallDesktop: true,
    });

    expect(html()).toMatch('stack stack-tp stack-tl stack-sd');
  });

  test('renders component with stacked elements above largeDesktop', async () => {
    const { html, updateProps } = harness;

    await updateProps({
      stackPhone: true,
      stackTabletPortrait: true,
      stackTabletLandscape: true,
      stackSmallDesktop: true,
      stackLargeDesktop: true,
    });

    expect(html()).toMatch('stack stack-tp stack-tl stack-sd stack-ld');
  });

  test('renders component with responsive revert', async () => {
    const { html, updateProps } = harness;

    await updateProps({
      revert: [true, true, true],
    });

    expect(html()).toMatch('vueInline space-24 revert revert-tp revert-tl revert-sd revert-ld');
  });

  test('renders component with nowrap', async () => {
    const { html, updateProps } = harness;

    await updateProps({
      noWrap: true,
    });

    expect(html()).toMatch('vueInline noWrap');
  });
});
