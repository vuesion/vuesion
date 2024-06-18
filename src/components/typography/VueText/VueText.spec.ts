import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/vue';
import VueText from './VueText.vue';

const textColorVariations = [
  'info',
  'danger',
  'warning',
  'success',
  'text-high',
  'text-medium',
  'text-low',
  'text-inverse-high',
  'text-inverse-medium',
  'text-inverse-low',
];

describe('VueText.vue', () => {
  test('renders component', () => {
    const { getByText } = render(VueText, {
      slots: {
        default: 'VueText',
      },
    });

    getByText('VueText');
  });

  test('renders color variations', () => {
    textColorVariations.forEach((variation) => {
      const { html } = render(VueText, {
        props: {
          color: variation as any,
        },
      });

      expect(html()).toMatch(variation);
    });
  });

  test('renders responsive alignment', () => {
    const { html } = render(VueText, {
      slots: {
        default: 'VueText',
      },
      props: {
        alignX: ['start', 'center', 'end'],
      },
    });
    const renderedHtml = html();

    expect(renderedHtml).toMatch('block');
    expect(renderedHtml).toMatch('align-start');
    expect(renderedHtml).toMatch('align-tp-center');
    expect(renderedHtml).toMatch('align-tl-end');
  });

  test('renders as nuxt link with no-wrap', () => {
    const { html } = render(VueText, {
      slots: {
        default: 'VueText',
      },
      props: {
        as: 'nuxt-link',
        to: '/test',
        noWrap: true,
      },
    });
    const renderedHtml = html();

    expect(renderedHtml).toMatch('<a ');
    expect(renderedHtml).toMatch('noWrap');
  });
});
