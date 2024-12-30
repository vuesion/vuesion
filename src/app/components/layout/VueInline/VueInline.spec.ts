import { describe, beforeEach, test, expect } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import VueInline from './VueInline.vue';

describe('VueInline.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueInline, {
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
    const { html, rerender } = harness;

    await rerender({ space: [8, 16, 24, 32, 64] });

    expect(html()).toMatch('gap-8 gap-tp-16 gap-tl-24 gap-sd-32 gap-ld-64');
  });

  test('renders component with responsive alignments', async () => {
    const { html, rerender } = harness;

    await rerender({ alignX: ['left', 'center', 'right'] });

    expect(html()).toMatch('justify-left justify-tp-center justify-tl-right');
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

  test('renders component with responsive reverse', async () => {
    const { html, rerender } = harness;

    await rerender({
      reverse: [true, true, true],
      stackPhone: true,
    });

    expect(html()).toMatch('flex-col-reverse flex-row-reverse-tp flex-row-reverse-tl');
  });

  test('renders component with nowrap', async () => {
    const { html, rerender } = harness;

    await rerender({
      noWrap: true,
    });

    expect(html()).toMatch('inline-flex no-wrap');
  });
});
