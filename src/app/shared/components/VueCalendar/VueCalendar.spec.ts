import { mount, createLocalVue } from '@vue/test-utils';
import VueCalendar               from './VueCalendar.vue';
import $style                    from 'identity-obj-proxy';
import { getI18n }               from '../../plugins/i18n/i18n';

const localVue = createLocalVue();
const today: Date = new Date();
const nextWeek: Date = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

describe('VueCalendar.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n:  getI18n(),
      mocks: { $style },
    });

    expect(wrapper.findAll(`.${$style.calendar}`)).toHaveLength(1);
    expect(wrapper.findAll(`.${$style.body}`)).toHaveLength(1);

    wrapper.find('h3').trigger('click');
    wrapper.update();
    expect(wrapper.findAll(`.${$style.calendar}`)).toHaveLength(1);
    expect(wrapper.findAll(`.${$style.body}`)).toHaveLength(0);
    expect(wrapper.findAll(`.${$style.year}`)).toHaveLength(1);
  });

  test('renders component with min max date', () => {
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n:      getI18n(),
      mocks:     { $style },
      propsData: {
        minDate: today,
        maxDate: nextWeek,
      },
    });

    expect(wrapper.findAll(`.${$style.calendar}`)).toHaveLength(1);
    expect(wrapper.findAll(`.${$style.body}`)).toHaveLength(1);

    wrapper.find('h3').trigger('click');
    wrapper.update();
    expect(wrapper.findAll(`.${$style.calendar}`)).toHaveLength(1);
    expect(wrapper.findAll(`.${$style.body}`)).toHaveLength(0);
    expect(wrapper.findAll(`.${$style.year}`)).toHaveLength(1);
  });

  test('renders component with range', () => {
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n:      getI18n(),
      mocks:     { $style },
      propsData: {
        startDate: today,
        endDate:   nextWeek,
      },
    });

    expect(wrapper.findAll(`.${$style.selectedDay}`)).toHaveLength(8);
  });

  test('renders component with selected date', () => {
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n:      getI18n(),
      mocks:     { $style },
      propsData: {
        selectedDate: nextWeek,
      },
    });

    expect(wrapper.findAll(`.${$style.selectedDay}`)).toHaveLength(1);
  });

  test('should emit events', () => {
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n:  getI18n(),
      mocks: { $style },
    }) as any;

    wrapper.vm.onChange();
    wrapper.vm.onClose();

    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  test('should setByDay', () => {
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n:  getI18n(),
      mocks: { $style },
    }) as any;

    expect(wrapper.vm.selectedDay).toBe(today.getDate());

    wrapper.vm.setByDay({ day: 5, disabled: true });
    expect(wrapper.vm.selectedDay).toBe(today.getDate());

    wrapper.vm.setByDay({ day: 5, disabled: false });
    expect(wrapper.vm.selectedDay).toBe(5);
  });

  test('should setByMonth', () => {
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n:  getI18n(),
      mocks: { $style },
    }) as any;

    expect(wrapper.vm.currentMonth).toBe(today.getMonth());
    expect(wrapper.vm.currentYear).toBe(today.getFullYear());

    wrapper.vm.setByMonth(5);
    expect(wrapper.vm.currentMonth).toBe(5);

    wrapper.vm.setByMonth(12);
    expect(wrapper.vm.currentMonth).toBe(0);
    expect(wrapper.vm.currentYear).toBe(today.getFullYear() + 1);

    wrapper.vm.setByMonth(-1);
    expect(wrapper.vm.currentMonth).toBe(11);
    expect(wrapper.vm.currentYear).toBe(today.getFullYear());
  });

  test('should setByYear', () => {
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n:  getI18n(),
      mocks: { $style },
    }) as any;

    wrapper.vm.$data.selecting = 'year';
    wrapper.update();

    expect(wrapper.vm.selectedYear).toBe(today.getFullYear());
    expect(wrapper.vm.currentYear).toBe(today.getFullYear());
    expect(wrapper.vm.selecting).toBe('year');

    wrapper.vm.setByYear(today.getFullYear() + 1);
    expect(wrapper.vm.selectedYear).toBe(today.getFullYear() + 1);
    expect(wrapper.vm.currentYear).toBe(today.getFullYear() + 1);
    expect(wrapper.vm.selecting).toBe('date');
  });

});
