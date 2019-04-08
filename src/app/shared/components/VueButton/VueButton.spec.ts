import { createLocalVue, mount } from '@vue/test-utils';
import VueButton from './VueButton.vue';
import { brandVariations } from '@components/utils';

const localVue = createLocalVue();

describe('VueButton.vue', () => {
  describe('Button', () => {
    test('renders component', () => {
      const wrapper = mount<any>(VueButton, { localVue });

      expect(wrapper.findAll(`.button`)).toHaveLength(1);
      expect(wrapper.findAll(`.active`)).toHaveLength(0);
    });

    test('should emit onClick event', () => {
      const wrapper = mount<any>(VueButton, {
        localVue,
      });

      wrapper.find('button').trigger('click');
      expect(wrapper.emitted().click).toBeTruthy();
    });

    test('should disable button and not emit onClick event', () => {
      const wrapper = mount<any>(VueButton, {
        localVue,
        propsData: {
          disabled: true,
        },
      });

      expect(wrapper.findAll(`.disabled`)).toHaveLength(1);

      wrapper.find('button').trigger('click');
      expect(wrapper.emitted().click).toBeFalsy();
    });

    test('should show loader and not emit onClick event', () => {
      const wrapper = mount<any>(VueButton, {
        localVue,
        propsData: {
          loading: true,
        },
      });

      wrapper.find('button').trigger('click');
      expect(wrapper.emitted().click).toBeFalsy();
    });

    test('should render color variations', () => {
      brandVariations.forEach((variation: string) => {
        const wrapper = mount<any>(VueButton, {
          localVue,
          propsData: {
            color: variation,
          },
        });
        const actual = wrapper.findAll(`.${variation}`);
        const expected = 1;

        expect(actual).toHaveLength(expected);
      });
    });

    test('should render outlined color', () => {
      const wrapper = mount<any>(VueButton, {
        localVue,
        propsData: {
          outlined: true,
        },
      });

      expect(wrapper.findAll(`.outlined`)).toHaveLength(1);
    });

    test('should render ghost color', () => {
      const wrapper = mount<any>(VueButton, {
        localVue,
        propsData: {
          ghost: true,
        },
      });

      expect(wrapper.findAll(`.ghost`)).toHaveLength(1);
    });

    test('should apply fixed width when loading', () => {
      const wrapper = mount<any>(VueButton, {
        localVue,
      });

      (wrapper as any).vm.$refs.button.getBoundingClientRect = () => {
        return {
          width: 134,
        };
      };

      expect(wrapper.vm.actualWidth).toBeNull();
      wrapper.setProps({ loading: true });
      expect(wrapper.vm.actualWidth).toBe('134px');
    });
  });

  describe('Link', () => {
    test('renders router-link', () => {
      const wrapper = mount<any>(VueButton, {
        localVue,
        propsData: {
          as: 'router-link',
          to: '/foo',
        },
        stubs: ['router-link'],
      });
      const actual = wrapper.html();
      const expected =
        '<router-link-stub event="click" tabindex="0" class="button ripple default" to="/foo"> <!----></router-link-stub>';

      expect(actual).toBe(expected);
    });

    test('renders disabled router-link', () => {
      const wrapper = mount<any>(VueButton, {
        localVue,
        propsData: {
          as: 'router-link',
          to: '/foo',
          disabled: true,
        },
        stubs: ['router-link'],
      });
      const actual = wrapper.html();
      const expected =
        '<router-link-stub disabled="true" tabindex="-1" aria-hidden="true" class="button ripple default disabled" to="/foo"> <!----></router-link-stub>';

      expect(actual).toBe(expected);
    });

    test('renders a', () => {
      const wrapper = mount<any>(VueButton, {
        localVue,
        propsData: {
          as: 'a',
          href: '/foo',
        },
      });
      const actual = wrapper.html();
      const expected = '<a tabindex="0" class="button ripple default" href="/foo"> <!----></a>';

      expect(actual).toBe(expected);
    });

    test('should prevent and stop click event if disabled', () => {
      const wrapper = mount<any>(VueButton, {
        localVue,
        propsData: {
          as: 'a',
          href: '/foo',
          disabled: true,
        },
      });
      const e = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      };

      wrapper.vm.click(e);

      expect(e.preventDefault).toHaveBeenCalled();
      expect(e.stopPropagation).toHaveBeenCalled();
    });
  });
});
