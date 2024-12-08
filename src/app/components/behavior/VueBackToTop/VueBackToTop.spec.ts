import { nextTick } from 'vue';
import { describe, beforeEach, test, expect, vi } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VueBackToTop from './VueBackToTop.vue';
import { triggerWindow } from '~/test/test-utils';

describe('VueBackToTop.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    (global as any).innerHeight = 100;
    (global as any).scrollY = 400;

    harness = render(VueBackToTop, {});
  });

  test('renders component', () => {
    const { getByTestId } = harness;

    getByTestId('back-to-top');
  });

  test('it should scroll to top on click', async () => {
    const { getByTestId } = harness;
    // @ts-ignore
    window.scrollTo = vi.fn();

    expect(window.scrollTo).not.toHaveBeenCalled();

    await fireEvent.click(getByTestId('back-to-top'));

    expect(window.scrollTo).toHaveBeenCalled();
  });

  test('should show the button', async () => {
    const { html } = harness;

    triggerWindow.scroll();

    (global as any).scrollY = 300;

    triggerWindow.scroll();

    await nextTick();

    expect(html()).toMatch('show');

    (global as any).scrollY = 0;

    triggerWindow.scroll();

    await nextTick();

    expect(html()).not.toMatch('show');
  });
});
