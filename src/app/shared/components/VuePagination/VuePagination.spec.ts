import { mount, createLocalVue } from '@vue/test-utils';
import VuePagination from './VuePagination.vue';
import $style from 'identity-obj-proxy';

const localVue = createLocalVue();

describe('VuePagination.vue', () => {

  test('should go to next page but not prev', () => {
    const wrapper = mount(VuePagination, {
      localVue,
      mocks: { $style },
      propsData: {
        pages: 10,
        current: 1,
      },
    });

    expect(wrapper.text()).toMatch('1 / 10');

    wrapper.find(`.${$style.prev}`).trigger('click');
    wrapper.update();

    expect(wrapper.emitted().change).toBeFalsy();

    wrapper.find(`.${$style.next}`).trigger('click');
    wrapper.update();

    expect(wrapper.emitted().change).toBeTruthy();
  });

  test('should go to pev page but not next', () => {
    const wrapper = mount(VuePagination, {
      localVue,
      mocks: { $style },
      propsData: {
        pages: 10,
        current: 10,
      },
    });

    expect(wrapper.text()).toMatch('10 / 10');

    wrapper.find(`.${$style.next}`).trigger('click');
    wrapper.update();

    expect(wrapper.emitted().change).toBeFalsy();

    wrapper.find(`.${$style.prev}`).trigger('click');
    wrapper.update();

    expect(wrapper.emitted().change).toBeTruthy();
  });

});
