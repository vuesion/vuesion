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
    const { html, updateProps } = harness;

    await updateProps({ src: 'src.jpg' });

    expect(html()).toMatch('url(src.jpg)');
  });
});
