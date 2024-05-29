import { describe, beforeEach, test, expect } from 'vitest';
import { render, type RenderResult } from '@testing-library/vue';
import VueBox from './VueBox.vue';

describe('VueBox.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueBox, {
      slots: {
        default: 'content',
      },
    });
  });

  test('renders component with single padding', async () => {
    const { html, rerender } = harness;

    await rerender({ padding: '8' });

    expect(html()).toMatch('pt-8');
    expect(html()).toMatch('pr-8');
    expect(html()).toMatch('pb-8');
    expect(html()).toMatch('pl-8');
  });

  test('renders component with responsive paddings', async () => {
    const { html, rerender } = harness;

    await rerender({ padding: ['8 12', 16, 24, 32, 64] });

    // phone
    expect(html()).toMatch('pt-8');
    expect(html()).toMatch('pr-12');
    expect(html()).toMatch('pb-8');
    expect(html()).toMatch('pl-12');

    // tabletPortrait
    expect(html()).toMatch('pt-tp-16');
    expect(html()).toMatch('pr-tp-16');
    expect(html()).toMatch('pb-tp-16');
    expect(html()).toMatch('pl-tp-16');

    // tabletLandscape
    expect(html()).toMatch('pt-tl-24');
    expect(html()).toMatch('pr-tl-24');
    expect(html()).toMatch('pb-tl-24');
    expect(html()).toMatch('pl-tl-24');

    // smallDesktop
    expect(html()).toMatch('pt-sd-32');
    expect(html()).toMatch('pr-sd-32');
    expect(html()).toMatch('pb-sd-32');
    expect(html()).toMatch('pl-sd-32');

    // largeDesktop
    expect(html()).toMatch('pt-ld-64');
    expect(html()).toMatch('pr-ld-64');
    expect(html()).toMatch('pb-ld-64');
    expect(html()).toMatch('pl-ld-64');
  });

  test('renders component with responsive alignments', async () => {
    const { html, rerender } = harness;

    await rerender({ alignX: ['start', 'center', 'end'], alignY: ['start', 'center', 'end'] });

    expect(html()).toMatch('justify-start justify-tp-center justify-tl-end items-start items-tp-center items-tl-end');
  });

  test('renders component with autoHeight', async () => {
    const { html, rerender } = harness;

    await rerender({ autoHeight: true });

    expect(html()).toMatch('autoHeight');
  });
});
