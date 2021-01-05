import { mount, createLocalVue } from '@vue/test-utils';
import { i18n } from '@/test/i18n';
import VuePagination from './VuePagination.vue';

const localVue = createLocalVue();

describe('VuePagination.vue', () => {
  test('should go to next page but not prev', async () => {
    const wrapper = mount(VuePagination, {
      localVue,
      i18n,
      propsData: {
        pages: 10,
        selectedPage: 1,
      },
    });

    expect(wrapper.text()).toMatch('1 / 10');

    wrapper.find(`.prev`).trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().click).toBeFalsy();

    wrapper.find(`.next`).trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().click).toBeTruthy();
  });

  test('should go to pev page but not next', async () => {
    const wrapper = mount(VuePagination, {
      localVue,
      i18n,
      propsData: {
        pages: 10,
        selectedPage: 10,
      },
    });

    expect(wrapper.text()).toMatch('10 / 10');

    wrapper.find(`.next`).trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().click).toBeFalsy();

    wrapper.find(`.prev`).trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().click).toBeTruthy();
  });
});
