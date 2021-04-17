import { render, fireEvent } from '@testing-library/vue';
import { brandColorVariations } from '../../prop-validators';
import VueButton from './VueButton.vue';

describe('VueButton.vue', () => {
  describe('Button', () => {
    test('renders component', () => {
      const { getByText } = render(VueButton, {
        slots: {
          default: 'VueButton',
        },
      });

      getByText('VueButton');
    });

    test('should emit onClick event', async () => {
      const { getByText, emitted } = render(VueButton, {
        slots: {
          default: 'VueButton',
        },
      });

      await fireEvent(getByText('VueButton').parentElement, new MouseEvent('click'));

      const actual = emitted().click;

      expect(actual).toBeTruthy();
    });

    test('should disable button and not emit onClick event', async () => {
      const { getByText, emitted } = render(VueButton, {
        slots: {
          default: 'VueButton',
        },
        propsData: {
          disabled: true,
        },
      });

      await fireEvent(getByText('VueButton'), new MouseEvent('click'));

      const actual = emitted().click;

      expect(actual).toBeFalsy();
    });

    test('should show loader and not emit onClick event', async () => {
      const { container, emitted } = render(VueButton, {
        slots: {
          default: 'VueButton',
        },
        propsData: {
          loading: true,
        },
      });

      await fireEvent(container, new MouseEvent('click'));

      const actual = emitted().click;

      expect(actual).toBeFalsy();
    });

    test('should render color variations', () => {
      brandColorVariations.forEach((variation: string) => {
        const { container } = render(VueButton, {
          propsData: {
            color: variation,
          },
        });
        const actual = container.querySelectorAll(`.${variation}`);
        const expected = 1;

        expect(actual).toHaveLength(expected);
      });
    });

    test('should render ghost button', () => {
      const { container } = render(VueButton, {
        propsData: {
          ghost: true,
        },
      });
      const actual = container.querySelectorAll(`.ghost`);
      const expected = 1;

      expect(actual).toHaveLength(expected);
    });

    test('should render block button', () => {
      const { container } = render(VueButton, {
        propsData: {
          block: true,
        },
      });
      const actual = container.querySelectorAll(`.block`);
      const expected = 1;

      expect(actual).toHaveLength(expected);
    });
  });

  describe('Link', () => {
    test('renders nuxt-link', () => {
      const { html } = render(VueButton, {
        propsData: {
          as: 'nuxt-link',
          to: '/foo',
        },
        stubs: ['nuxt-link'],
      });
      const actual = html();
      const expected = 'nuxt-link-stub';

      expect(actual).toMatch(expected);
    });

    test('renders disabled nuxt-link', () => {
      const { html } = render(VueButton, {
        propsData: {
          as: 'nuxt-link',
          to: '/foo',
          disabled: true,
        },
        stubs: ['nuxt-link'],
      });
      const actual = html();
      const expected = 'nuxt-link-stub disabled';

      expect(actual).toMatch(expected);
    });

    test('renders a', () => {
      const wrapper = render(VueButton, {
        propsData: {
          as: 'a',
          href: '/foo',
        },
      });
      const actual = wrapper.html();
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
