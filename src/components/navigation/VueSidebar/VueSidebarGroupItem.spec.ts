import { describe, beforeEach, test, expect } from 'vitest';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import VueSidebarGroupItem from './VueSidebarGroupItem.vue';

describe('VueSidebarGroupItem.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueSidebarGroupItem, {
      props: {
        label: 'Item 1',
        icon: 'user',
        badgeContent: 'badge-content',
      },
    });
  });

  test('renders component as div', () => {
    const { getByText } = harness;

    getByText('Item 1');
    getByText('badge-content');
  });

  test('should emit click event when clicked', async () => {
    const { getByText, emitted } = harness;

    await fireEvent.click(getByText('Item 1'));
    await fireEvent.keyDown(getByText('Item 1'), { key: 'Enter' });

    expect(emitted().click).toBeTruthy();
  });

  test('should emit click event when clicked as nuxt-link', async () => {
    const { getByText, rerender, emitted } = harness;

    await rerender({ to: '/foo' });

    await fireEvent.click(getByText('Item 1'));
    await fireEvent.keyDown(getByText('Item 1'), { key: 'Enter' });

    expect(emitted().click).toBeTruthy();
  });

  test('should emit click event when clicked as anchor', async () => {
    const { getByText, rerender, emitted } = harness;

    await rerender({ href: '/foo' });

    await fireEvent.click(getByText('Item 1'));
    await fireEvent.keyDown(getByText('Item 1'), { key: 'Enter' });

    // Link will not emit event, it'll open in a new window
    expect(emitted().click).toBeFalsy();
  });
});
