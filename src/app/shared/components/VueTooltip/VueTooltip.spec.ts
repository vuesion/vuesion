import { mount, createLocalVue } from '@vue/test-utils';
import VueTooltip from './VueTooltip.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueTooltip.vue', () => {

  test('renders component with text', () => {
    const wrapper = mount(VueTooltip, {
      localVue,
      mocks: { $style },
      propsData: {
        tip: 'foo',
      },
      slots: {
        default: 'test',
      },
    });

    expect(wrapper.text()).toBe('test');
    expect(wrapper.classes()).toContain($style.vueTooltip);
    expect(wrapper.classes()).toContain($style.highlight);
  });

  test('renders component with button', () => {
    const wrapper = mount(VueTooltip, {
      localVue,
      mocks: { $style },
      propsData: {
        tip: 'foo',
      },
      slots: {
        default: '<button>test</button>',
      },
    });

    expect(wrapper.text()).toBe('test');
    expect(wrapper.classes()).toContain($style.vueTooltip);
    expect(wrapper.classes()).not.toContain($style.highlight);
  });

  test('renders component with nothing', () => {
    const wrapper = mount(VueTooltip, {
      localVue,
      mocks: { $style },
      propsData: {
        tip: 'foo',
      },
      slots: {
        default: [],
      },
    });

    expect(wrapper.text()).toBe('');
    expect(wrapper.classes()).toContain($style.vueTooltip);
    expect(wrapper.classes()).not.toContain($style.highlight);
  });

  test('should show and hide tooltip', () => {
    const wrapper = mount(VueTooltip, {
      localVue,
      mocks: { $style },
      propsData: {
        tip: 'foo',
      },
      slots: {
        default: 'test',
      },
    });

    expect(wrapper.classes()).not.toContain($style.show);

    wrapper.vm.$el.dispatchEvent(new Event('mouseenter'));
    wrapper.update();
    expect(wrapper.classes()).toContain($style.show);

    wrapper.vm.$el.dispatchEvent(new Event('mouseleave'));
    wrapper.update();
    expect(wrapper.classes()).not.toContain($style.show);

    /**
     * touch
     */

    wrapper.vm.$el.dispatchEvent(new Event('touchend'));
    wrapper.update();
    expect(wrapper.classes()).toContain($style.show);

    wrapper.vm.$el.dispatchEvent(new Event('touchend'));
    wrapper.update();
    expect(wrapper.classes()).not.toContain($style.show);
  });

});
