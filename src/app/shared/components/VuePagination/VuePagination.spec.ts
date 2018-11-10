import { mount, createLocalVue } from '@vue/test-utils';
import VuePagination from './VuePagination.vue';
import { i18n } from '../../plugins/i18n/i18n';

const localVue = createLocalVue();

describe('VuePagination.vue', () => {
  test('should go to next page but not prev', () => {
    const wrapper = mount(VuePagination, {
      localVue,
      i18n,
      propsData: {
        pages: 10,
        current: 1,
      },
    });

    expect(wrapper.text()).toMatch('1 / 10');

    wrapper.find(`.prev`).trigger('click');
    expect(wrapper.emitted().change).toBeFalsy();

    wrapper.find(`.next`).trigger('click');
    expect(wrapper.emitted().change).toBeTruthy();
  });

  test('should go to pev page but not next', () => {
    const wrapper = mount(VuePagination, {
      localVue,
      i18n,
      propsData: {
        pages: 10,
        current: 10,
      },
    });

    expect(wrapper.text()).toMatch('10 / 10');

    wrapper.find(`.next`).trigger('click');
    expect(wrapper.emitted().change).toBeFalsy();

    wrapper.find(`.prev`).trigger('click');
    expect(wrapper.emitted().change).toBeTruthy();
  });
});
