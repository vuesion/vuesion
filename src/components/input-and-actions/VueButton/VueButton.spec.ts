import { describe, beforeEach, test, expect, vi } from 'vitest';
import { render, fireEvent, RenderResult } from '@testing-library/vue';
import VueButton from './VueButton.vue';
import { ButtonStyleValues } from '~/components/prop-types';

describe('VueButton.vue', () => {
  describe('Button', () => {
    let harness: RenderResult;

    beforeEach(() => {
      harness = render(VueButton, {
        slots: {
          default: 'VueButton',
        },
      });
    });

    test('renders component', () => {
      const { getByText } = harness;

      getByText('VueButton');
    });

    test('should emit onClick event', async () => {
      const { getByText, emitted } = harness;

      await fireEvent(getByText('VueButton').parentElement, new MouseEvent('click'));

      const actual = emitted().click;

      expect(actual).toBeTruthy();
    });

    test('should disable button and not emit onClick event', async () => {
      const { getByText, emitted, rerender } = harness;

      await rerender({ disabled: true });

      await fireEvent(getByText('VueButton'), new MouseEvent('click'));

      const actual = emitted().click;

      expect(actual).toBeFalsy();
    });

    test('should show loader and not emit onClick event', async () => {
      const { container, emitted, rerender } = harness;

      await rerender({ loading: true });

      await fireEvent(container, new MouseEvent('click'));

      const actual = emitted().click;

      expect(actual).toBeFalsy();
    });

    test('should render button styles', async () => {
      for (let i = 0; i < ButtonStyleValues.length; i++) {
        const style = ButtonStyleValues[i];
        const { html, rerender } = harness;

        await rerender({ look: style });

        expect(html()).toMatch(style);
      }
    });

    test('should render block button', async () => {
      const { html, rerender } = harness;

      await rerender({ block: true });

      const actual = html();
      const expected = 'block';

      expect(actual).toMatch(expected);
    });

    test('renders component with icons', async () => {
      const { html, rerender } = harness;

      await rerender({ leadingIcon: 'leadingIcon', trailingIcon: 'trailingIcon' });

      expect(html()).toMatch('vue-icon-leadingicon');
      expect(html()).toMatch('vue-icon-trailingicon');
    });
  });

  describe('Nuxt-Link', () => {
    let harness: RenderResult;

    beforeEach(() => {
      harness = render(VueButton, {
        props: {
          as: 'nuxt-link',
          to: '/foo',
        },
        global: {
          stubs: ['nuxt-link'],
        },
      });
    });

    test('renders nuxt-link', () => {
      const { html } = harness;
      const actual = html();
      const expected = 'nuxt-link-stub';

      expect(actual).toMatch(expected);
    });

    test('renders disabled nuxt-link', async () => {
      const { rerender, html } = harness;

      await rerender({ disabled: true });

      const actual = html();
      const expected = 'disabled';

      expect(actual).toMatch(expected);
    });
  });

  describe('Anchor', () => {
    let harness: RenderResult;

    beforeEach(() => {
      harness = render(VueButton, {
        props: {
          as: 'a',
          href: '/foo',
        },
      });
    });

    test('renders a', () => {
      const actual = harness.html();
      const expected = '<a';

      expect(actual).toMatch(expected);
    });

    test('should prevent and stop click event if disabled', async () => {
      const { getByText } = render(VueButton, {
        props: {
          as: 'a',
          href: '/foo',
          disabled: true,
        },
        slots: { default: 'foo' },
      });
      const e: MouseEvent = new MouseEvent('click');
      e.preventDefault = vi.fn();
      e.stopPropagation = vi.fn();

      await fireEvent(getByText('foo').parentElement, e);

      expect(e.preventDefault).toHaveBeenCalled();
      expect(e.stopPropagation).toHaveBeenCalled();
    });
  });
});
