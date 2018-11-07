import { createLocalVue, mount } from '@vue/test-utils';
import VueToggle from './VueToggle.vue';

const localVue = createLocalVue();

describe('VueToggle.vue', () => {
  test('renders component', () => {
    const wrapper = mount(VueToggle, {
      localVue,
      propsData: {
        name: 'foo',
        id: 'foo',
        label: 'foo',
      },
    });

    expect(wrapper.find('label').text()).toBe('foo');
    expect(wrapper.findAll('#foo')).toHaveLength(1);
  });

  test('renders focused component', () => {
    const wrapper = mount(VueToggle, {
      localVue,
      propsData: {
        name: 'foo',
        id: 'foo',
        label: 'foo',
      },
    });

    expect(wrapper.findAll('.focus')).toHaveLength(0);

    wrapper.find('.container').trigger('click');
    expect(wrapper.findAll('.focus')).toHaveLength(1);
  });

  test('renders checked component', () => {
    const wrapper = mount(VueToggle, {
      localVue,
      propsData: {
        name: 'foo',
        id: 'foo',
        label: 'foo',
        checked: true,
      },
    });

    expect(wrapper.findAll('.checked')).toHaveLength(1);
  });

  test('should trigger events', () => {
    const wrapper = mount(VueToggle, {
      localVue,
      propsData: {
        name: 'foo',
        id: 'foo',
        label: 'foo',
        checked: true,
      },
    });

    expect(wrapper.emitted().click).toBeFalsy();
    expect(wrapper.emitted().input).toBeFalsy();

    wrapper.findAll('.container').trigger('click');

    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().input).toBeTruthy();
  });

  test('should not trigger eventsif disabled', () => {
    const wrapper = mount(VueToggle, {
      localVue,
      propsData: {
        name: 'foo',
        id: 'foo',
        label: 'foo',
        checked: true,
        disabled: true,
      },
    });

    expect(wrapper.emitted().click).toBeFalsy();
    expect(wrapper.emitted().input).toBeFalsy();

    wrapper.findAll('.container').trigger('click');

    expect(wrapper.emitted().click).toBeFalsy();
    expect(wrapper.emitted().input).toBeFalsy();
  });
});
