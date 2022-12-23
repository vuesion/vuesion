import { describe, beforeEach, test, expect } from 'vitest';
import { render, RenderResult } from '@testing-library/vue';
import Testimonials from './Testimonials.vue';

describe('Testimonials.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(Testimonials, {
      props: {
        stargazersCount: 1337,
        stargazers: [
          {
            login: 'xar',
            avatar_url: 'https://avatars.githubusercontent.com/u/184865?v=4',
            new: true,
          },
          {
            login: 'designerkamal',
            avatar_url: 'https://avatars.githubusercontent.com/u/237070?v=4',
          },
          {
            login: 'martincarlin87',
            avatar_url: 'https://avatars.githubusercontent.com/u/1721925?v=4',
            new: true,
          },
          {
            login: 'smoothdvd',
            avatar_url: 'https://avatars.githubusercontent.com/u/22420?v=4',
          },
        ],
      },
    });
  });

  test('renders component', () => {
    const { html } = harness;

    expect(html()).toMatch('1337');
  });
});
