import { mount, createLocalVue } from '@vue/test-utils';
import VueTooltip                from './VueTooltip.vue';

const localVue = createLocalVue();

describe('VueTooltip.vue', () => {

  test('renders component with text', () => {
    const wrapper = mount(VueTooltip, {
      localVue,
      propsData: {
        tip: 'foo',
      },
      slots:     {
        default: 'test',
      },
    });

    expect(wrapper.text()).toBe('test');
    expect(wrapper.classes()).toContain('vueTooltip');
    expect(wrapper.classes()).toContain('highlight');
  });

  test('renders component with button', () => {
    const wrapper = mount(VueTooltip, {
      localVue,
      propsData: {
        tip: 'foo',
      },
      slots:     {
        default: '<button>test</button>',
      },
    });

    expect(wrapper.text()).toBe('test');
    expect(wrapper.classes()).toContain('vueTooltip');
    expect(wrapper.classes()).not.toContain('highlight');
  });

  test('renders component with nothing', () => {
    const wrapper = mount(VueTooltip, {
      localVue,
      propsData: {
        tip: 'foo',
      },
      slots:     {
        default: [],
      },
    });

    expect(wrapper.text()).toBe('');
    expect(wrapper.classes()).toContain('vueTooltip');
    expect(wrapper.classes()).not.toContain('highlight');
  });

  test('should show and hide tooltip', () => {
    const wrapper = mount(VueTooltip, {
      localVue,
      propsData: {
        tip: 'foo',
      },
      slots:     {
        default: 'test',
      },
    });

    expect(wrapper.classes()).not.toContain('show');

    wrapper.vm.$el.dispatchEvent(new Event('mouseenter'));
    expect(wrapper.classes()).toContain('show');

    wrapper.vm.$el.dispatchEvent(new Event('mouseleave'));
    expect(wrapper.classes()).not.toContain('show');

    /**
     * touch
     */

    wrapper.vm.$el.dispatchEvent(new Event('touchend'));
    expect(wrapper.classes()).toContain('show');

    wrapper.vm.$el.dispatchEvent(new Event('touchend'));
    expect(wrapper.classes()).not.toContain('show');
  });

});
