import { createLocalVue, mount } from '@vue/test-utils';
import VueDonutChart from './VueDonutChart.vue';

const localVue = createLocalVue();
const $style: any = require('identity-obj-proxy');

describe('VueDonutChart.vue', () => {
  beforeEach(() => {
    $style.color1 = 'red';
    $style.color2 = 'green';
    $style.color3 = 'blue';
  });

  test('renders donut chart', () => {
    const wrapper = mount<any>(VueDonutChart, {
      localVue,
      propsData: {
        title: 'Foo',
        data: [
          { label: 'foo', value: 400 },
          { label: 'bar', value: 244 },
          { label: 'baz', value: 800 },
          { label: 'foo', value: 400 },
          { label: 'bar', value: 244 },
          { label: 'baz', value: 800 },
        ],
      },
      mocks: {
        $style,
      },
    });

    expect(wrapper.text()).toMatch('Foo');
    expect(wrapper.findAll('circle')).toHaveLength(6);

    wrapper.setProps({
      data: [
        { label: 'foo', value: 5465 },
        { label: 'bar', value: 8465 },
        { label: 'baz', value: 568 },
        { label: 'foo', value: 3645 },
        { label: 'bar', value: 151 },
        { label: 'baz', value: 941 },
      ],
    });
  });

  test('renders pie chart', () => {
    const wrapper = mount<any>(VueDonutChart, {
      localVue,
      propsData: {
        title: 'Foo',
        data: [
          { label: 'foo', value: 400 },
          { label: 'bar', value: 244 },
          { label: 'baz', value: 800 },
          { label: 'foo', value: 400 },
          { label: 'bar', value: 244 },
          { label: 'baz', value: 800 },
        ],
        type: 'pie',
      },
      mocks: {
        $style,
      },
    });

    expect(wrapper.text()).toMatch('Foo');
    expect(wrapper.findAll('circle')).toHaveLength(6);
    expect(wrapper.vm.width).toBe(32);
  });
});
