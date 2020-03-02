import { createLocalVue, mount, WrapperArray } from '@vue/test-utils';
import VueCalendar from './VueCalendar.vue';
import { i18n } from '../../plugins/i18n/i18n';

const localVue = createLocalVue();
const today: Date = new Date();
const nextWeek: Date = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

describe('VueCalendar.vue', () => {
  test('renders component', () => {
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
    });

    expect(wrapper.findAll(`.calendar`)).toHaveLength(1);
    expect(wrapper.findAll(`.body`)).toHaveLength(1);

    wrapper.find('.h4').trigger('click');
    expect(wrapper.findAll(`.calendar`)).toHaveLength(1);
    expect(wrapper.findAll(`.body`)).toHaveLength(0);
    expect(wrapper.findAll(`.year`)).toHaveLength(1);
  });

  test('renders component with min max date', () => {
    const min: Date = new Date(2018, 1, 8);
    const max: Date = new Date(2018, 1, 15);
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        minDate: min,
        maxDate: max,
      },
    });

    expect(wrapper.findAll(`.calendar`)).toHaveLength(1);
    expect(wrapper.findAll(`.body`)).toHaveLength(1);

    wrapper.find('.h4').trigger('click');
    expect(wrapper.findAll(`.calendar`)).toHaveLength(1);
    expect(wrapper.findAll(`.body`)).toHaveLength(0);
    expect(wrapper.findAll(`.year`)).toHaveLength(1);
  });

  test('renders component with range', () => {
    const start: Date = new Date(2018, 1, 8);
    const end: Date = new Date(2018, 1, 15);
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        startDate: start,
        endDate: end,
      },
    });

    expect(wrapper.findAll(`.selectedDay`)).toHaveLength(8);
  });

  test('renders component with selected date', () => {
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        selectedDate: nextWeek,
      },
    });

    expect(wrapper.findAll(`.selectedDay`)).toHaveLength(1);
  });

  test('should emit events', () => {
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
    });

    wrapper.vm.onChange();
    wrapper.vm.onClose();

    expect(wrapper.emitted('change')).toBeTruthy();
    expect(wrapper.emitted('close')).toBeTruthy();
  });

  test('should setByDay', () => {
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
    });

    expect(wrapper.vm.selectedDay).toBe(today.getDate());

    wrapper.vm.setByDay({ day: 5, disabled: true });
    expect(wrapper.vm.selectedDay).toBe(today.getDate());

    wrapper.vm.setByDay({ day: 5, disabled: false });
    expect(wrapper.vm.selectedDay).toBe(5);
  });

  test('should setByMonth', () => {
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
    });

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
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
    });

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
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        startDate: start,
        endDate: end,
        firstDayOfWeek: 1,
      },
    });

    expect(wrapper.findAll(`.selectedDay`)).toHaveLength(2);
  });

  test('should render 31. may 2018', () => {
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        today: new Date(2018, 4, 31),
        selectedDate: new Date(2018, 5, 2),
      },
    });

    expect(wrapper.findAll(`.currentDay`)).toHaveLength(0);
  });

  test('should render 100 years minDate + 100 years in future', async () => {
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        minDate: new Date(2000, 1, 1),
      },
    });

    wrapper.find('.h4').trigger('click');

    const years = wrapper.find(`.year`).findAll('div');

    expect(years).toHaveLength(102);
    expect(years.at(1).text()).toBe('2000');
    expect(years.at(years.length - 1).text()).toBe('2100');
  });

  test('should render 100 years maxDate - 100 years in the past', async () => {
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        maxDate: new Date(2000, 1, 1),
        selectedDate: new Date(2000, 1, 1),
      },
    });

    wrapper.find('.h4').trigger('click');

    const years = wrapper.find(`.year`).findAll('div');

    expect(years).toHaveLength(102);
    expect(years.at(1).text()).toBe('1900');
    expect(years.at(years.length - 1).text()).toBe('2000');
  });

  test('should render 50 in the past and 50 years in the future', async () => {
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        today: new Date(),
      },
    });

    wrapper.find('.h4').trigger('click');

    const years = wrapper.find(`.year`).findAll('div');

    expect(years).toHaveLength(102);
    expect(years.at(1).text()).toBe((today.getFullYear() - 50).toString());
    expect(years.at(years.length - 1).text()).toBe((today.getFullYear() + 50).toString());
  });

  test('should render the right week days if firstDayOdWeek is 1 and the first day of the month is a sunday', () => {
    const testDate = new Date(2019, 11, 1);
    const wrapper = mount<any>(VueCalendar, {
      localVue,
      i18n,
      propsData: {
        today: testDate,
        firstDayOfWeek: 1,
      },
    });
    const cell = wrapper
      .find('tbody')
      .find('tr')
      .findAll('td')
      .at(6);
    expect(cell.text()).toBe('1');
  });
});
