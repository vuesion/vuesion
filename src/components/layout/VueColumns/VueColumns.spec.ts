import { describe, beforeEach, test, expect } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import VueColumns from './VueColumns.vue';
import VueColumn from './VueColumn/VueColumn.vue';

describe('VueColumns.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueColumns, {
      slots: {
        default: ['<vue-column>sidebar</vue-column>', '<vue-column>main content</vue-column>'],
      },
      global: {
        stubs: {
          'vue-column': VueColumn,
        },
      },
    });
  });

  test('renders component', () => {
    const { getByText } = harness;

    getByText('sidebar');
    getByText('main content');
  });

  test('renders component with responsive spacings', async () => {
    const { html, rerender } = harness;

    await rerender({ space: [8, 16, 24, 32, 64] });

    expect(html()).toMatch('gap-8 gap-tp-16 gap-tl-24 gap-sd-32 gap-ld-64');
  });

  test('renders component with responsive horizontal alignments', async () => {
    const { html, rerender } = harness;

    await rerender({ alignX: ['left', 'center', 'right'] });

    expect(html()).toMatch('justify-left justify-tp-center justify-tl-right');
  });

  test('renders component with responsive vertical alignments', async () => {
    const { html, rerender } = harness;

    await rerender({ alignY: ['top', 'center', 'bottom'] });

    expect(html()).toMatch('items-top items-tp-center items-tl-bottom');
  });

  test('renders component with stacked elements below tabletPortrait', async () => {
    const { html, rerender } = harness;

    await rerender({ stackPhone: true });

    expect(html()).toMatch('flex-col');
  });

  test('renders component with stacked elements below tabletLandscape', async () => {
    const { html, rerender } = harness;

    await rerender({ stackPhone: true, stackTabletPortrait: true });

    expect(html()).toMatch('flex-col flex-col-tp');
  });

  test('renders component with stacked elements below smallDesktop', async () => {
    const { html, rerender } = harness;

    await rerender({ stackPhone: true, stackTabletPortrait: true, stackTabletLandscape: true });

    expect(html()).toMatch('flex-col flex-col-tp flex-col-tl');
  });

  test('renders component with stacked elements below largeDesktop', async () => {
    const { html, rerender } = harness;

    await rerender({
      stackPhone: true,
      stackTabletPortrait: true,
      stackTabletLandscape: true,
      stackSmallDesktop: true,
    });

    expect(html()).toMatch('flex-col flex-col-tp flex-col-tl flex-col-sd');
  });

  test('renders component with stacked elements above largeDesktop', async () => {
    const { html, rerender } = harness;

    await rerender({
      stackPhone: true,
      stackTabletPortrait: true,
      stackTabletLandscape: true,
      stackSmallDesktop: true,
      stackLargeDesktop: true,
    });

    expect(html()).toMatch('flex-col flex-col-tp flex-col-tl flex-col-sd flex-col-ld');
  });

  test('renders component with responsive revert', async () => {
    const { html, rerender } = harness;

    await rerender({
      reverse: [true, true, true],
    });

    expect(html()).toMatch('gap-24 flex-row-reverse flex-row-reverse-tp flex-row-reverse-tl');
  });
});
