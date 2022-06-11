import { describe, beforeEach, test, expect } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import VueAvatar from './VueAvatar.vue';

describe('VueAvatar.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(VueAvatar, {
      props: {
        name: 'foo bar baz foo2',
        src: null,
        size: 'sm',
      },
    });
  });

  test('renders component with initials', () => {
    const { getByText } = harness;

    getByText('fbb');
  });

  test('renders component with image', async () => {
    const { html, rerender } = harness;

    await rerender({ src: 'src.jpg' });

    expect(html()).toMatch('url(src.jpg)');
  });

  test('renders component with icon', async () => {
    const { html, rerender } = harness;

    await rerender({ icon: 'fooBarIcon' });

    expect(html()).toMatch('vue-icon-foobaricon');
  });

  test('renders different text sizes based on the size prop', async () => {
    const { html, rerender } = harness;

    expect(html()).toMatch('support');

    await rerender({ size: 'md' });
    expect(html()).toMatch('h6');

    await rerender({ size: 'lg' });
    expect(html()).toMatch('h4');
  });
});
