import { mount, createLocalVue } from '@vue/test-utils';
import VueDateRangePicker        from './VueDateRangePicker.vue';
import $style                    from 'identity-obj-proxy';
import { getI18n }               from '../../plugins/i18n/i18n';

const localVue = createLocalVue();
const today: Date = new Date();
const nextWeek: Date = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

describe('VueDateRangePicker.vue', () => {

  test('should handle onStartChange', () => {
    const wrapper = mount(VueDateRangePicker, {
      localVue,
      i18n:  getI18n(),
      mocks: { $style },
    }) as any;

    expect(wrapper.vm.startDate).toBe(null);

    wrapper.vm.onStartChange(today);
    wrapper.update();
    expect(wrapper.vm.startDate).toBe(today);
    expect(wrapper.vm.endDate).toBe(null);

    wrapper.vm.$data.endDate = today;
    wrapper.update();
    expect(wrapper.vm.startDate).toBe(today);
    expect(wrapper.vm.endDate).toBe(today);

    wrapper.vm.onStartChange(nextWeek);
    wrapper.update();
    expect(wrapper.vm.startDate).toBe(nextWeek);
    expect(wrapper.vm.endDate).toBe(nextWeek);
  });

  test('should handle onEndChange', () => {
    const wrapper = mount(VueDateRangePicker, {
      localVue,
      i18n:  getI18n(),
      mocks: { $style },
    }) as any;

    expect(wrapper.vm.endDate).toBe(null);

    wrapper.vm.onEndChange(today);
    wrapper.update();
    expect(wrapper.vm.endDate).toBe(today);
    expect(wrapper.emitted('change')).toBeTruthy();
  });

});
