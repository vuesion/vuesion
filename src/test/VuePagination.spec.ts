import { mount, createLocalVue } from '@vue/test-utils';
import VuePagination from '@/components/VuePagination/VuePagination.vue';
import { i18n } from '@/components/plugins/i18n/i18n';

const localVue = createLocalVue();

describe('VuePagination.vue', () => {
  test('should go to next page but not prev', async () => {
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
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().change).toBeFalsy();

    wrapper.find(`.next`).trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().change).toBeTruthy();
  });

  test('should go to pev page but not next', async () => {
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
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().change).toBeFalsy();

    wrapper.find(`.prev`).trigger('click');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().change).toBeTruthy();
  });
});
