import { render, fireEvent, RenderResult } from '@testing-library/vue';
import { buttonStyles } from '../../prop-validators';
import VueButton from './VueButton.vue';

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
      const { getByText, emitted, updateProps } = harness;

      await updateProps({ disabled: true });

      await fireEvent(getByText('VueButton'), new MouseEvent('click'));

      const actual = emitted().click;

      expect(actual).toBeFalsy();
    });

    test('should show loader and not emit onClick event', async () => {
      const { container, emitted, updateProps } = harness;

      await updateProps({ loading: true });

      await fireEvent(container, new MouseEvent('click'));

      const actual = emitted().click;

      expect(actual).toBeFalsy();
    });

    test('should render button styles', async () => {
      for (let i = 0; i < buttonStyles.length; i++) {
        const style = buttonStyles[i];
        const { container, updateProps } = harness;

        await updateProps({ look: style });

        expect(container.querySelectorAll(`.${style}`)).toHaveLength(1);
      }
    });

    test('should render block button', async () => {
      const { container, updateProps } = harness;

      await updateProps({ block: true });

      const actual = container.querySelectorAll(`.block`);
      const expected = 1;

      expect(actual).toHaveLength(expected);
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
        stubs: ['nuxt-link'],
      });
    });

    test('renders nuxt-link', () => {
      const { html } = harness;
      const actual = html();
      const expected = 'nuxt-link-stub';

      expect(actual).toMatch(expected);
    });

    test('renders disabled nuxt-link', async () => {
      const { updateProps, html } = harness;

      await updateProps({ disabled: true });

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
      const expected = 'a href';

      expect(actual).toMatch(expected);
    });

    test('should prevent and stop click event if disabled', async () => {
      const { getByText } = render(VueButton, {
        propsData: {
          as: 'a',
          href: '/foo',
          disabled: true,
        },
        slots: { default: 'foo' },
      });
      const e: MouseEvent = new MouseEvent('click');
      e.preventDefault = jest.fn();
      e.stopPropagation = jest.fn();

      await fireEvent(getByText('foo').parentElement, e);

      expect(e.preventDefault).toHaveBeenCalled();
      expect(e.stopPropagation).toHaveBeenCalled();
    });
  });
});
