import { describe, test, expect, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/vue';
import { useRouter } from 'vue-router';
import VueMarkdown from './VueMarkdown.vue';

vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    push: () => ({}),
  })),
}));

describe('VueMarkdown.vue', () => {
  test('renders component', async () => {
    const { getByText, unmount } = render(VueMarkdown, {
      props: {
        markdown: `# foo\n ## bar\n ### baz`,
      },
    });

    getByText('foo');
    getByText('bar');
    getByText('baz');

    await unmount();
  });

  test('renders component with trimmed text', () => {
    const { getByText } = render(VueMarkdown, {
      props: {
        markdown: '       foo bar',
      },
    });

    getByText('foo bar');
  });

  test('click on a link should use the router', async () => {
    const push = vi.fn();

    (useRouter as any).mockImplementationOnce(() => ({
      push,
    }));

    const { getByText } = render(VueMarkdown, {
      props: {
        markdown: '[test](/test)',
      },
    });

    await fireEvent.click(getByText('test'));

    expect(push).toHaveBeenCalledTimes(1);
  });

  test('click on a link should  not use the router', async () => {
    const push = vi.fn();

    (useRouter as any).mockImplementationOnce(() => ({
      push,
    }));

    const { getByText } = render(VueMarkdown, {
      props: {
        useRouter: false,
        markdown: '[test](/test)',
      },
    });

    await fireEvent.click(getByText('test'));

    expect(push).toHaveBeenCalledTimes(0);
  });
});
