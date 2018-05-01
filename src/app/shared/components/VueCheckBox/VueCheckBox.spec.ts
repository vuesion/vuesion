import { createLocalVue, mount } from '@vue/test-utils';
import VueCheckBox               from './VueCheckBox.vue';

const localVue = createLocalVue();

describe('VueCheckBox.vue', () => {

  test('renders checkbox', () => {
    const wrapper = mount(VueCheckBox, {
      localVue,
      propsData: {
        name:  'foo',
        id:    'foo',
        label: 'Test',
      },
    });

    expect(wrapper.find('label').text()).toBe('Test');
    expect(wrapper.findAll('#foo')).toHaveLength(1);
    expect(wrapper.findAll(`.checkbox`)).toHaveLength(1);
  });

  test('renders radio', () => {
    const wrapper = mount(VueCheckBox, {
      localVue,
      propsData: {
        name:  'foo',
        id:    'foo',
        label: 'Test',
        radio: true,
      },
    });

    expect(wrapper.find('label').text()).toBe('Test');
    expect(wrapper.findAll('#foo')).toHaveLength(1);
    expect(wrapper.findAll(`.radio`)).toHaveLength(1);
  });

  test('should emit click event', () => {
    const wrapper = mount(VueCheckBox, {
      localVue,
      propsData: {
        name:  'foo',
        label: 'Test',
      },
    });

    wrapper.find(`.box`).trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });

  test('should disable checkbox', () => {
    const wrapper = mount(VueCheckBox, {
      localVue,
      propsData: {
        name:     'foo',
        label:    'Test',
        disabled: true,
      },
    });

    expect(wrapper.findAll(`.disabled`)).toHaveLength(1);
    wrapper.find(`.box`).trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();
  });

});
