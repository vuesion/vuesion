import { createLocalVue, mount } from '@vue/test-utils';
import VueCalendar               from './VueCalendar.vue';
import { i18n }                  from '../../plugins/i18n/i18n';

const localVue = createLocalVue();
const today: Date = new Date();
const nextWeek: Date = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

describe('VueCalendar.vue', () => {

  test('renders component', () => {
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n,
    });

    expect(wrapper.findAll(`.calendar`)).toHaveLength(1);
    expect(wrapper.findAll(`.body`)).toHaveLength(1);

    wrapper.find('h4').trigger('click');
    expect(wrapper.findAll(`.calendar`)).toHaveLength(1);
    expect(wrapper.findAll(`.body`)).toHaveLength(0);
    expect(wrapper.findAll(`.year`)).toHaveLength(1);
  });

  test('renders component with min max date', () => {
    const min: Date = new Date(2018, 1, 8);
    const max: Date = new Date(2018, 1, 15);
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        minDate: min,
        maxDate: max,
      },
    });

    expect(wrapper.findAll(`.calendar`)).toHaveLength(1);
    expect(wrapper.findAll(`.body`)).toHaveLength(1);

    wrapper.find('h4').trigger('click');
    expect(wrapper.findAll(`.calendar`)).toHaveLength(1);
    expect(wrapper.findAll(`.body`)).toHaveLength(0);
    expect(wrapper.findAll(`.year`)).toHaveLength(1);
  });

  test('renders component with range', () => {
    const start: Date = new Date(2018, 1, 8);
    const end: Date = new Date(2018, 1, 15);
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        startDate: start,
        endDate:   end,
      },
    });

    expect(wrapper.findAll(`.selectedDay`)).toHaveLength(8);
  });

  test('renders component with selected date', () => {
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        selectedDate: nextWeek,
      },
    });

    expect(wrapper.findAll(`.selectedDay`)).toHaveLength(1);
  });

  test('should emit events', () => {
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n,
    }) as any;

    wrapper.vm.onChange();
    wrapper.vm.onClose();

    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  test('should setByDay', () => {
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n,
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
      i18n,
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
      i18n,
    }) as any;

    wrapper.vm.$data.selecting = 'year';

    expect(wrapper.vm.selectedYear).toBe(today.getFullYear());
    expect(wrapper.vm.currentYear).toBe(today.getFullYear());
    expect(wrapper.vm.selecting).toBe('year');

    wrapper.vm.setByYear(today.getFullYear() + 1);
    expect(wrapper.vm.selectedYear).toBe(today.getFullYear() + 1);
    expect(wrapper.vm.currentYear).toBe(today.getFullYear() + 1);
    expect(wrapper.vm.selecting).toBe('date');
  });

  test('should render 1. april 2018', () => {
    const start: Date = new Date(2018, 3, 1);
    const end: Date = new Date(2018, 3, 2);
    const wrapper = mount(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        startDate:      start,
        endDate:        end,
        firstDayOfWeek: 1,
      },
    });

    expect(wrapper.findAll(`.selectedDay`)).toHaveLength(2);
  });

});
