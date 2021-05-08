import { render, RenderResult } from '@testing-library/vue';
import VueColumn from '@/components/layout/VueColumns/VueColumn/VueColumn.vue';
import VueColumns from './VueColumns.vue';

describe('VueColumns.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueColumns, {
      components: { VueColumn },
      stubs: ['nuxt-link'],
      slots: {
        default: ['<vue-column>sidebar</vue-column>', '<vue-column>main content</vue-column>'],
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('sidebar');
    getByText('main content');
  });

  test('renders component with responsive spacings', async () => {
    const { html, updateProps } = harness;

    await updateProps({ space: [8, 16, 24, 32, 64] });

    expect(html()).toMatch('space-8 space-tp-16 space-tl-24 space-sd-32 space-ld-64');
  });

  test('renders component with responsive horizontal alignments', async () => {
    const { html, updateProps } = harness;

    await updateProps({ align: ['left', 'center', 'right'] });

    expect(html()).toMatch('alignh-left alignh-tp-center alignh-tl-right');
  });

  test('renders component with responsive vertical alignments', async () => {
    const { html, updateProps } = harness;

    await updateProps({ alignY: ['top', 'center', 'bottom'] });

    expect(html()).toMatch('alignv-top alignv-tp-center alignv-tl-bottom');
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

    expect(html()).toMatch('vueColumns space-24 revert revert-tp revert-tl revert-sd revert-ld');
  });

  test('renders component using the whole page', async () => {
    const { html, updateProps } = harness;

    await updateProps({
      fullPage: true,
    });

    expect(html()).toMatch('vueColumns space-24 fullPage');
  });
});
