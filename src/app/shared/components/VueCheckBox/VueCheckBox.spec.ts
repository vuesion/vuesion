import { mount, createLocalVue } from '@vue/test-utils';
import VueCheckBox               from './VueCheckBox.vue';
import $style                    from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VueCheckBox.vue', () => {

  test('renders checkbox', () => {
    const wrapper = mount(VueCheckBox, {
      localVue,
      mocks:     { $style },
      propsData: {
        id:    'foo',
        label: 'Test',
      },
    });

    expect(wrapper.find('label').text()).toBe('Test');
    expect(wrapper.findAll('#foo')).toHaveLength(1);
    expect(wrapper.findAll(`.${$style.checkbox}`)).toHaveLength(1);
  });

  test('renders radio', () => {
    const wrapper = mount(VueCheckBox, {
      localVue,
      mocks:     { $style },
      propsData: {
        id:    'foo',
        label: 'Test',
        radio: true,
      },
    });

    expect(wrapper.find('label').text()).toBe('Test');
    expect(wrapper.findAll('#foo')).toHaveLength(1);
    expect(wrapper.findAll(`.${$style.radio}`)).toHaveLength(1);
  });

  test('should emit click event', () => {
    const wrapper = mount(VueCheckBox, {
      localVue,
      mocks:     { $style },
      propsData: {
        id:    'foo',
        label: 'Test',
      },
    });

    wrapper.find(`.${$style.checkbox}`).trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });

  test('should disable checkbox', () => {
    const wrapper = mount(VueCheckBox, {
      localVue,
      mocks:     { $style },
      propsData: {
        id:       'foo',
        label:    'Test',
        disabled: true,
      },
    });

    expect(wrapper.findAll(`.${$style.disabled}`)).toHaveLength(1);
    wrapper.find(`.${$style.checkbox}`).trigger('click');
    expect(wrapper.emitted().click).toBeFalsy();
  });

});
